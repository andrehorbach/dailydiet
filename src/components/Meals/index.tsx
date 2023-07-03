import { Button } from '@components/Button';
import { Container, Title, Dates } from './styles';
import { MealCard } from '@components/MealCard';
import { useNavigation } from '@react-navigation/native';

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
      
      { meals.map((meal: MealProps) => (
        <MealCard 
        key={meal.mealDesc}
        title={meal.mealTitle.substring(0, 28) + (meal.mealTitle.length >= 28 ? "..." : "")}
        onPress={()=>handleGoToMeal(meal)}
        onDiet={meal.onDiet}
      />
      ))}
    </Container>
  )
}