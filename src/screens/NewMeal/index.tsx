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


export function NewMeal() {

  const [ mealTitle, setMealTitle] = useState<string>('');
  const [ mealDesc, setMealDesc ] = useState<string>('');
  const [ mealDate, setMealDate ] = useState<Date | null>(null);
  const [ dateText, setDateText ] = useState('');
  const [ timeText, setTimeText ] = useState('');
  const [ onDiet, setOnDiet] = useState<boolean | undefined>(undefined);

  const navigation = useNavigation();
  const { COLORS } = useTheme();
  
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

  async function handleCreateMeal() {
  
    if(!mealTitle.trim().length) {
      return Alert.alert('Cadastrar refeição', 'Informe o nome da refeição!')
    }

    handleCombineDateTime();

    const meal: MealProps = {
      mealTitle,
      mealDesc,
      mealDate: mealDate || new Date(),
      onDiet,
    };

    try {
          await mealCreate(meal);
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
              placeholder="dd/mm/aaaa"
              placeholderTextColor={ COLORS.GRAY_4 }
              onChangeText={setDateText}
            />
          </DateHourInput>
          <DateHourInput>
            <Title> Hora </Title>
            <Input 
              placeholder="00:00"
              placeholderTextColor={ COLORS.GRAY_4 }
              onChangeText={setTimeText}
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
        style={{marginBottom: "5%", marginHorizontal: 24}}
        title="Cadastrar refeição"
        onPress={handleCreateMeal}
      />
    </Container>
  )
}

