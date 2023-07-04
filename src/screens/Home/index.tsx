import { useEffect, useContext, useState, useCallback } from 'react';
import { Container } from './styles';
import { MainHeader } from '@components/MainHeader';
import { Header } from '@components/Header';
import { Meals, MealProps } from '@components/Meals';
import { Loading } from '@components/Loading';
import { mealsRetrieve } from '@storage/mealsRetrieve';
import { useFocusEffect } from '@react-navigation/native';
import { mealsReset } from '@storage/mealsReset';
import { MealsProvider } from '../../contexts/MealsContext';


export function Home() {

  const [ meals, setMeals ] = useState<MealProps[]>([]);
  const [ onDietStatus, setOnDietStatus] = useState<boolean | null>(true);
  const [ mealStats, setMealStats ] = useState({
    totalMeals: 0,
    totalOnDiet: 0,
    totalOffDiet: 0,
    totalPercent: 0,
    bestSequence: 0,
  });
  const [ isLoading, setIsLoading] = useState(true);

  async function fetchMeals() {

    try {
      setIsLoading(true)
      const data = await mealsRetrieve();
      setMeals(data);   
      console.log(data);
      
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    const calculatedTotalMeals = meals.length;
    const calculatedTotalOnDiet = meals.filter((meal) => meal.onDiet).length;
    const calculatedTotalOffDiet = meals.filter((meal) => !meal.onDiet).length;
    const calculatedTotalPercent = Math.round((calculatedTotalOnDiet / calculatedTotalMeals) * 100);

    let currentSequence = 0;
    let calculatedBestSequence = 0;

    if (calculatedTotalPercent > 80) {
      setOnDietStatus(true);
    } else {
      setOnDietStatus(false);
    }

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
    })
    // Update the state with the calculated values
  }, [meals]);


  useFocusEffect(useCallback(() => {
      fetchMeals();
    }, [])
  )

  // // Para debuggar o array de meals:
  // mealsReset();

  return(
    <MealsProvider>
      <Container>
        <Header />
        <MainHeader 
          onDiet={onDietStatus ? true : false}
          mealStats={mealStats}
          title={mealStats.totalPercent + "%"}
          subTitle='das refeições dentro da dieta'
          headerType="NOHEADER"
        />
        <Meals 
          meals={meals}
        />
      </Container>
    </MealsProvider>
  )
}
