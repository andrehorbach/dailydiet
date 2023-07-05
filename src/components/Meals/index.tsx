import { FlatList } from 'react-native';
import { Button } from '@components/Button';
import { Container, Title, Dates, ListGradient } from './styles';
import { MealCard } from '@components/MealCard';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components';
import { format } from 'date-fns';

export type MealProps = {
  mealTitle: string;
  mealDesc: string;
  mealDate: Date;
  onDiet: boolean | undefined;
  mealId: number;
};

type Props = {
  meals: MealProps[];
};


export function Meals( { meals } : Props) {  

  const navigation = useNavigation();
  const { COLORS } = useTheme();

  function handleNewMeal() {
    navigation.navigate('newmeal') 
  }

  function handleGoToMeal(meal: MealProps) {
    navigation.navigate('meal', { meal }) 
  }
  
  function groupAndSortMealsByDate({ meals }: Props) {
    const mealsByDate: { [date: string]: MealProps[] } = meals.reduce(
      (acc: { [date: string]: MealProps[] }, meal) => {
        const date = new Date(meal.mealDate).toDateString();
        if (!acc[date]) {
          acc[date] = [];
        }
        acc[date].push(meal);
        return acc;
      },
      {}
    );
  
    const sortedMealsByDate = Object.entries(mealsByDate)
      .sort(([dateA], [dateB]) => new Date(dateB).getTime() - new Date(dateA).getTime())
      .map(([date, meals]) => ({
        date: new Date(date),
        meals,
      }));
    return sortedMealsByDate;
  }

  const sortedMealsByDate = groupAndSortMealsByDate({meals}); // Call the function with the meals array


  return(
    <Container>
      <Title>Refeições</Title>
      <Button
        title={"Nova refeição"}
        iconName={"PLUS"}
        onPress={handleNewMeal}
        style={{
          marginLeft: 0, 
          marginRight: 0, 
          marginBottom: 0
        }}
      />  
      {/* <Dates>12.08.22</Dates> // ajustar o mapping pra incluir datas*/} 
        
      <FlatList
        data={sortedMealsByDate}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <>
            <Dates>{format(item.date, "dd.MM.yy")}</Dates>
            <FlatList
              data={item.meals}
              keyExtractor={(meal) => meal.mealId.toString()}
              renderItem={({ item: meal }) => (
                <MealCard
                  key={meal.mealId}
                  meal={meal}
                  onPress={() => handleGoToMeal(meal)}
                />
              )}
            />
          </>
      )}
    />
      <ListGradient 
        colors={['transparent', COLORS.GRAY_6]}
      />
    </Container>
  )
}