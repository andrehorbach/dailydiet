import { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
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
import { isValid, format } from 'date-fns'
import DateTimePickerModal from "react-native-modal-datetime-picker";

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
  const [datePickerVisible, setDatePickerVisible] = useState<boolean>(false);
  const [timePickerVisible, setTimePickerVisible] = useState<boolean>(false);

  const { COLORS } = useTheme();

  useEffect(() => {
    setDateText(mealCurrentDate);
    setTimeText(mealCurrentTime);
  }, []);
  
  function handleDietSelect(diet: boolean) {
    diet ? setOnDiet(true) : setOnDiet(false)
  }

   function showDatePicker() {
    setDatePickerVisible(true);
  }

  function hideDatePicker() {
    setDatePickerVisible(false);
  }

  function handleDateConfirm(date: Date) {
    setMealDate(date);
    setDateText(format(date, "dd/MM/yyyy"));
    hideDatePicker();
  }

  function showTimePicker() {
    setTimePickerVisible(true);
  }

  function hideTimePicker() {
    setTimePickerVisible(false);
  }

  function handleTimeConfirm(time: Date) {
    // Update your mealDate state with the selected time
    const updatedMealDate = mealDate ? new Date(mealDate) : new Date();
    updatedMealDate.setHours(time.getHours());
    updatedMealDate.setMinutes(time.getMinutes());
    setMealDate(updatedMealDate);
    setTimeText(format(updatedMealDate, "HH:mm"));
    hideTimePicker();
  }

  function handleCombineDateTime() {
    const date = new Date(dateText);
    const timeParts = timeText.split(':');
    date.setHours(Number(timeParts[0]));
    date.setMinutes(Number(timeParts[1]));
    setMealDate(date);
  }

  async function handleEditMeal() {
  
    if (!mealTitle.trim().length || !mealDesc.trim().length) {
      return Alert.alert('Editar refeição', 'Preencha todos os campos!');
    }

    if (onDiet === undefined) {
      return Alert.alert('Editar refeição', 'Selecione se está dentro da dieta!');
    }

    if (!mealDate) {
      return Alert.alert('Editar refeição', 'Selecione uma data e hora!');
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
          navigation.navigate('home')
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
            editable={datePickerVisible ? false : true} 
            placeholder="dd/mm/aaaa"
            placeholderTextColor={ COLORS.GRAY_4 }
            onChangeText={setDateText}
            value={dateText}
            onFocus={showDatePicker}
          />
          <DateTimePickerModal
            isVisible={datePickerVisible}
            mode="date"
            date={mealDate ? new Date(mealDate) : new Date()}
            onConfirm={handleDateConfirm}
            onCancel={hideDatePicker}
            />
        </DateHourInput>
        <DateHourInput>
          <Title> Hora </Title>
          <Input 
            placeholder="00:00"
            placeholderTextColor={ COLORS.GRAY_4 }
            onChangeText={setTimeText}
            value={timeText}
            onFocus={showTimePicker}
          />
          <DateTimePickerModal
            isVisible={timePickerVisible}
            mode="time"
            date={mealDate ? new Date(mealDate) : new Date()}
            onConfirm={handleTimeConfirm}
            onCancel={hideDatePicker}
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
