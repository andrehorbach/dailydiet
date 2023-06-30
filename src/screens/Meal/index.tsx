import { useState } from 'react';
import { FlatList, ScrollView, View } from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { format } from 'date-fns'
import { Input } from '@components/Input';
import { 
  Container, 
  MealContainer, 
  MealTitle, 
  MealDescription,
  DateTimeTitle,
  DateTimeDescription
} from './styles';
import { MainHeader } from '@components/MainHeader';
import { MealDisplayDiet } from '@components/MealDisplayDiet';
import { Button } from '@components/Button';
import { MealRemoveAlert } from '@components/MealRemoveAlert';
import { MealProps } from '@components/Meals';

type RouteParams = {
  meal: MealProps;
}

export function Meal() {

  const navigation = useNavigation();
  const [ deleteMealDialog, setDeleteMealDialog ] = useState(false);

  const route = useRoute();
  const { meal } = route.params as RouteParams;
   
  const mealCurrentDate = meal.mealDate ? format(new Date(meal.mealDate), 'dd/MM/yyyy') : '';
  const mealCurrentTime = meal.mealDate ? format(new Date(meal.mealDate), 'hh:mm') : '';

  function handleEditMealDialog(meal: MealProps) {
    navigation.navigate('editmeal', { meal })
  }

  function handleDeleteMealDialog() {
    setDeleteMealDialog(!deleteMealDialog)
  }

  return(
    <Container>
      <MainHeader 
        headerType="SMALL"
        onDiet={meal.onDiet}
        title='Refeição'
      />
      <MealContainer>
       <MealTitle>{meal.mealTitle}</MealTitle>
       <MealDescription>{meal.mealDesc}</MealDescription>
       <DateTimeTitle>Data e hora</DateTimeTitle>
       <DateTimeDescription>{mealCurrentDate + " às " + mealCurrentTime}</DateTimeDescription>
       <MealDisplayDiet 
        title={meal.onDiet ? "dentro da dieta" : "fora da dieta"}
        onDiet={meal.onDiet}
       />
      </MealContainer>
      <Button
        title={"Editar refeição"}
        iconName={"PENCIL"}
        onPress={()=>handleEditMealDialog(meal)}
      /> 
      <Button
        title={"Excluir refeição"}
        iconName={"TRASH"}
        type="SECONDARY"
        onPress={handleDeleteMealDialog}
      /> 
      <MealRemoveAlert 
        visible={deleteMealDialog ? true : false}
        onPress={handleDeleteMealDialog}
      />
    </Container>
  )
}