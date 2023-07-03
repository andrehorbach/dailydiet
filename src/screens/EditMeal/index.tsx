import { useState } from 'react';
import { Alert } from 'react-native';
import { FlatList, ScrollView, View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { format } from 'date-fns'
import { Input } from '@components/Input';
import { 
  Container, 
  NewMealContainer, 
  Title, 
  DividerContainer,
  DateHourInput
} from './styles';
import { MainHeader } from '@components/MainHeader';
import { useTheme } from 'styled-components';
import { NewMealButton } from '@components/NewMealButton';
import { Button } from '@components/Button';
import { MealProps } from '@components/Meals';
import { mealEdit } from '@storage/mealEdit';
import { AppError } from '@utils/AppError';

type RouteParams = {
  meal: MealProps;
}

export function EditMeal() {

  const navigation = useNavigation();
  const mealId = 0; // arrumar na função mealEdit.ts
  const route = useRoute();
  const { meal } = route.params as RouteParams;
  const mealCurrentDate = meal.mealDate ? format(new Date(meal.mealDate), 'dd/MM/yyyy') : '';
  const mealCurrentTime = meal.mealDate ? format(new Date(meal.mealDate), 'hh:mm') : '';

  const [ mealTitle, setMealTitle] = useState<string>(meal.mealTitle);
  const [ mealDesc, setMealDesc ] = useState<string>(meal.mealDesc);
  const [ mealDate, setMealDate ] = useState<Date | null>(meal.mealDate);
  const [ dateText, setDateText ] = useState(mealCurrentDate);
  const [ timeText, setTimeText ] = useState(mealCurrentTime);
  const [ onDiet, setOnDiet] = useState<boolean | undefined>(meal.onDiet);

  const { COLORS } = useTheme();

  console.log("meal:");
  
  function handleDietSelect(diet: boolean) {
    diet ? setOnDiet(true) : setOnDiet(false)
  }

  function handleCombineDateTime() {
    const date = new Date(dateText);
    const timeParts = timeText.split(':');
    date.setHours(Number(timeParts[0]));
    date.setMinutes(Number(timeParts[1]));
    setMealDate(date);
  }

  async function handleEditMeal() {
  
    if(!mealTitle.trim().length) {
      return Alert.alert('Cadastrar refeição', 'Informe o nome da refeição!')
    }

    handleCombineDateTime();

    const meal: MealProps = {
      mealTitle,
      mealDesc,
      mealDate: mealDate || new Date(),
      onDiet,
      mealId,
    };

    try {
          await mealEdit(meal);
          navigation.navigate('feedback')
        }
        catch(err) {
          if(err instanceof AppError) {
            Alert.alert('Nova Refeição', err.message)
          }
          else {
            Alert.alert('Não foi possível criar nova refeição');
            console.log(err);
          }
        }
    } 

  return(
    <Container>
    <MainHeader 
      headerType="SMALL"
      title="Editar refeição"
      onDiet={null}
    />
    <NewMealContainer>
      <Title>Nome</Title>
      <Input 
        onChangeText={setMealTitle}
        value={mealTitle}
      />
      <Title>Descrição</Title>
      <Input 
        style={{
          minHeight: 120, 
          maxHeight: 120, 
          textAlignVertical: 'top'
        }}
        onChangeText={setMealDesc}
        value={mealDesc}
      />
       <DividerContainer>
        <DateHourInput>
          <Title> Data </Title>
          <Input 
            placeholder="dd/mm/aaaa"
            placeholderTextColor={ COLORS.GRAY_4 }
            onChangeText={setDateText}
            value={mealCurrentDate}
          />
        </DateHourInput>
        <DateHourInput>
          <Title> Hora </Title>
          <Input 
            placeholder="00:00"
            placeholderTextColor={ COLORS.GRAY_4 }
            onChangeText={setTimeText}
            value={mealCurrentTime}
          />
        </DateHourInput>
      </DividerContainer>
      <Title>Está dentro da dieta?</Title>
      <DividerContainer >
        <NewMealButton 
          title="Sim"
          selected={onDiet ? true : false}
          onPress={()=>handleDietSelect(true)}
          type="PRIMARY"
          activeOpacity={1}
        />
        <NewMealButton 
          title="Não"
          selected={onDiet ? false : true}
          onPress={()=>handleDietSelect(false)}
          type="SECONDARY"
          activeOpacity={1}
        />
      </DividerContainer>

    </NewMealContainer>
    <Button 
      style={{marginBottom: "5%", marginHorizontal: 24}}
      title="Salvar"
      onPress={handleEditMeal}
    />
  </Container>
  )
}
