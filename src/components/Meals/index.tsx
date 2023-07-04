import { FlatList } from 'react-native';
import { Button } from '@components/Button';
import { Container, Title, Dates, ListGradient } from './styles';
import { MealCard } from '@components/MealCard';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components';

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
        data={meals}
        keyExtractor={item => (item && item.mealId ? item.mealId.toString() : "")}
        renderItem={({ item }) => (
          <MealCard 
          key={item.mealId}
          title={item.mealTitle.substring(0, 28) + (item.mealTitle.length >= 28 ? "..." : "")}
          onPress={()=>handleGoToMeal(item)}
          onDiet={item.onDiet}
        />
        )}      
      />
      <ListGradient 
        colors={['transparent', COLORS.GRAY_6]}
      />
    </Container>
  )
}