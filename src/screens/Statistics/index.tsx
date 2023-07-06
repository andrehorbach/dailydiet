import { useState, useEffect, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
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
import { MealProps } from '@components/Meals';
import { mealsRetrieve } from '@storage/mealsRetrieve';

export function Statistics() {

  const [ meals, setMeals ] = useState<MealProps[]>([]);
  const [ isLoading, setIsLoading] = useState(true);
  const [ mealStats, setMealStats ] = useState({      
    totalMeals: 0,
    totalOnDiet: 0,
    totalOffDiet: 0,
    totalPercent: 0,
    bestSequence: 0,
    onDiet: false,
  });

  async function fetchMeals() {

    try {
      setIsLoading(true)
      const data = await mealsRetrieve();
      setMeals(data);        
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false)
    }
  }

  useFocusEffect(useCallback(() => {
      fetchMeals();
    }, [])
  )

  useEffect(() => {
    
    const calculatedTotalMeals = meals.length;
    const calculatedTotalOnDiet = meals.filter((meal) => meal.onDiet).length;
    const calculatedTotalOffDiet = meals.filter((meal) => !meal.onDiet).length;
    const calculatedTotalPercent = Math.round(
      (calculatedTotalOnDiet / calculatedTotalMeals) * 100
    );
    const calculatedDietStatus = calculatedTotalPercent > 80 ? true : false;
    let currentSequence = 0;
    let calculatedBestSequence = 0;

    for (let i = 0; i < meals.length; i++) {
      if (meals[i].onDiet) {
        currentSequence++;
      } else {
        if (currentSequence > calculatedBestSequence) {
          calculatedBestSequence = currentSequence;
        }
        currentSequence = 0;
      }
    }
    setMealStats({
      totalMeals: calculatedTotalMeals,
      totalOnDiet: calculatedTotalOnDiet,
      totalOffDiet: calculatedTotalOffDiet,
      totalPercent: calculatedTotalPercent,
      bestSequence: calculatedBestSequence,
      onDiet: calculatedDietStatus,
    });
  }, [meals]);

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