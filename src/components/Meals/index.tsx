import { Button } from '@components/Button';
import { Container, Title, Dates } from './styles';
import { MealCard } from '@components/MealCard';
import { useNavigation, useRoute } from '@react-navigation/native';

export function Meals() {  

  const navigation = useNavigation();

  function handleNewMeal() {
    navigation.navigate('newmeal') 
  }

  function handleGoToMeal() {
    console.log("handleGoToMeal");
    navigation.navigate('meal') 
   
    
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
      <Dates>12.08.22</Dates>
      <MealCard 
        title="Lasanha de frango com queijo"
        onPress={handleGoToMeal}
      />
      <MealCard 
        title="Lasanha de frango com queijo"
        onPress={handleGoToMeal}
      />
      <MealCard 
        title="Lasanha de frango com queijo"
        onPress={handleGoToMeal}
      />
      <MealCard 
        title="Lasanha de frango com queijo"
        onPress={handleGoToMeal}
      />
      <MealCard 
        title="Lasanha de frango com queijo"
        onPress={handleGoToMeal}
      />      

    </Container>
  )
}