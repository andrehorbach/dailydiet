import { useState } from 'react';
import { FlatList, ScrollView, View } from 'react-native';
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


export function EditMeal() {

  const navigation = useNavigation();
  const { COLORS } = useTheme();
  const [ dietSelected, setDietSelected] = useState<boolean | null>(null);

  function handleDietSelect(diet: boolean) {
    diet ? setDietSelected(true) : setDietSelected(false)
  }

  function handleSubmit() {

    navigation.navigate('feedback');

  }

  return(
    <Container>
      <MainHeader 
        headerType="SMALL"
        title="Editar refeição"
        onDiet={dietSelected}
      />
      <NewMealContainer>
        <Title>Nome</Title>
        <Input />
        <Title>Descrição</Title>
        <Input 
          style={{
            minHeight: 120, 
            maxHeight: 120, 
            textAlignVertical: 'top'
          }}
        />
         <DividerContainer>
          <DateHourInput>
            <Title> Data </Title>
            <Input 
              placeholder="dd/mm/aaaa"
              placeholderTextColor={ COLORS.GRAY_4 }
            />
          </DateHourInput>
          <DateHourInput>
            <Title> Hora </Title>
            <Input 
              placeholder="00:00"
              placeholderTextColor={ COLORS.GRAY_4 }
            />
          </DateHourInput>
        </DividerContainer>
        <Title>Está dentro da dieta?</Title>
        <DividerContainer >
          <NewMealButton 
            title="Sim"
            selected={dietSelected ? true : false}
            onPress={()=>handleDietSelect(true)}
            type="PRIMARY"
            activeOpacity={1}
          />
          <NewMealButton 
            title="Não"
            selected={dietSelected === false || undefined ? true : false}
            onPress={()=>handleDietSelect(false)}
            type="SECONDARY"
            activeOpacity={1}
          />
        </DividerContainer>


      </NewMealContainer>
      <Button 
        style={{marginBottom: "5%", marginHorizontal: 24}}
        title="Cadastrar refeição"
        onPress={handleSubmit}
      />
    </Container>
  )
}