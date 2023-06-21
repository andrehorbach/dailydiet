import { useState } from 'react';
import { FlatList, ScrollView, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
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
import { useTheme } from 'styled-components';
import { MealDisplayDiet } from '@components/MealDisplayDiet';
import { Button } from '@components/Button';
import { MealRemoveAlert } from '@components/MealRemoveAlert';



export function Meal() {

  const navigation = useNavigation();
  const { COLORS } = useTheme();
  const [ dietSelected, setDietSelected] = useState<boolean | undefined>(undefined);

  function handleDietSelect(diet: boolean) {
    diet ? setDietSelected(true) : setDietSelected(false)
  }

  function handleSubmit() {

    navigation.navigate('feedback');

  }

  return(
    <Container>
      <MainHeader 
        asHeader
      />
      <MealContainer>
       <MealTitle>Sanduíche</MealTitle>
       <MealDescription>Sanduíche de pão integral com atum e salada de alface e tomate</MealDescription>
       <DateTimeTitle>Data e hora</DateTimeTitle>
       <DateTimeDescription>12/08/2022 às 16:00</DateTimeDescription>
       <MealDisplayDiet 
        title="dentro da dieta"
       />
      </MealContainer>
      <Button
        title={"Editar refeição"}
        iconName={"PENCIL"}
        onPress={()=>{}}
      /> 
      <Button
        title={"Excluir refeição"}
        iconName={"TRASH"}
        type="SECONDARY"
        onPress={()=>{}}
      /> 
      <MealRemoveAlert />
    </Container>
  )
}