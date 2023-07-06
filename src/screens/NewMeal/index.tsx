import { useState } from 'react';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
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
import { mealCreate } from '@storage/mealCreate';
import { AppError } from '@utils/AppError';
import { isValid, format } from 'date-fns';
import DateTimePickerModal from "react-native-modal-datetime-picker";

export function NewMeal() {

  const [ mealTitle, setMealTitle] = useState<string>('');
  const [ mealDesc, setMealDesc ] = useState<string>('');
  const [ mealDate, setMealDate ] = useState<Date | null>(null);
  const [ dateText, setDateText ] = useState('');
  const [ timeText, setTimeText ] = useState('');
  const [ onDiet, setOnDiet] = useState<boolean | undefined>(undefined);
  const [datePickerVisible, setDatePickerVisible] = useState<boolean>(false);
  const [timePickerVisible, setTimePickerVisible] = useState<boolean>(false);

  const navigation = useNavigation();
  const { COLORS } = useTheme();

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

  function handleDietSelect(diet: boolean) {
    diet ? setOnDiet(true) : setOnDiet(false)
  }

  async function handleCreateMeal() {
  
    if (!mealTitle.trim().length || !mealDesc.trim().length) {
      return Alert.alert('Cadastrar refeição', 'Preencha todos os campos!');
    }

    if (onDiet === undefined) {
      return Alert.alert('Cadastrar refeição', 'Selecione se está dentro da dieta!');
    }

    if (!mealDate) {
      return Alert.alert('Cadastrar refeição', 'Selecione uma data e hora!');
    }

    handleCombineDateTime();

    const meal: MealProps = {
      mealTitle,
      mealDesc,
      mealDate: mealDate || new Date(),
      onDiet,
      mealId: 0,
    };

  try {
        await mealCreate(meal);
        navigation.navigate('feedback', { onDiet })
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
        title="Nova refeição"
        onDiet={null}
      />
      <NewMealContainer>
        <Title>Nome</Title>
        <Input 
          onChangeText={setMealTitle}
        />
        <Title>Descrição</Title>
        <Input 
          style={{
            minHeight: 120, 
            maxHeight: 120, 
            textAlignVertical: 'top'
          }}
          onChangeText={setMealDesc}
        />
         <DividerContainer>
          <DateHourInput>
            <Title> Data </Title>
            <Input
              editable={datePickerVisible ? false : true} 
              placeholder="dd/mm/aaaa"
              placeholderTextColor={ COLORS.GRAY_4 }
              onChangeText={setDateText}
              value={mealDate && isValid(mealDate) ? format(mealDate, "dd/MM/yyyy") : ''}
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
              value={mealDate && isValid(mealDate) ? format(mealDate, "hh:mm") : ''}
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
            selected={onDiet === false || undefined ? true : false}
            onPress={()=>handleDietSelect(false)}
            type="SECONDARY"
            activeOpacity={1}
          />
        </DividerContainer>
      </NewMealContainer>
      <Button 
        style={{
          marginBottom: "5%", 
          marginHorizontal: 24, 
          position: "absolute", 
          bottom: 0,
          left: 0,
          right: 0,
        }}
        title="Cadastrar refeição"
        onPress={handleCreateMeal}
      />
    </Container>
    
  )
}

