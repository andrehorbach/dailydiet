import { useContext } from 'react';
import { 
  Container, 
  StatisticsContainer, 
  StatisticsText, 
  DataDisplay, 
  DataTitle, 
  DataDescription,
  MealsCount
} from './styles';
import { MainHeader } from '@components/MainHeader';
import { MealsContext, MealsProvider } from '@contexts/MealsContext';

export function Statistics() {

  const mealStats = useContext(MealsContext);

  return(
    <Container>
      <MainHeader 
        headerType="LARGE"
        mealStats={mealStats}
        title={mealStats.totalPercent + "%"}
        subTitle="das refeições dentro da dieta"
        onDiet={mealStats.onDiet}
      />
      <StatisticsContainer>
        <StatisticsText>Estatísticas Gerais</StatisticsText>
        <DataDisplay fullWidth>
          <DataTitle>{mealStats.bestSequence}</DataTitle>
          <DataDescription>melhor sequência de pratos dentro da dieta</DataDescription>
        </DataDisplay>
        <DataDisplay fullWidth>
          <DataTitle>{mealStats.totalMeals}</DataTitle>
          <DataDescription>refeições registradas</DataDescription>
        </DataDisplay>
        <MealsCount >
          <DataDisplay onDiet>
            <DataTitle>{mealStats.totalOnDiet}</DataTitle>
            <DataDescription>refeições dentro da dieta</DataDescription>
          </DataDisplay>
          <DataDisplay>
            <DataTitle>{mealStats.totalOffDiet}</DataTitle>
            <DataDescription>refeições fora da dieta</DataDescription>
          </DataDisplay>
        </MealsCount>
      </StatisticsContainer>
      
    </Container>
  )
}