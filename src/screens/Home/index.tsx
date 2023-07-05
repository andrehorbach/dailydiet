import { useEffect, useContext, useState, useCallback } from 'react';
import { Container } from './styles';
import { MainHeader } from '@components/MainHeader';
import { Header } from '@components/Header';
import { Meals, MealProps } from '@components/Meals';
import { Loading } from '@components/Loading';
import { mealsRetrieve } from '@storage/mealsRetrieve';
import { useFocusEffect } from '@react-navigation/native';
import { mealsReset } from '@storage/mealsReset';
import { MealsContext, MealsProvider } from '@contexts/MealsContext';

export function Home() {

  const [ meals, setMeals ] = useState<MealProps[]>([]);
  const [ onDietStatus, setOnDietStatus] = useState<boolean | null>(true);

  const [ isLoading, setIsLoading] = useState(true);

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
  const mealStats = useContext(MealsContext);
  
  return(
    <Container>
      <Header />
      <MainHeader 
        onDiet={mealStats.onDiet}
        mealStats={mealStats}
        title={mealStats.totalPercent.toString() + "%"}
        subTitle='das refeições dentro da dieta'
        headerType="NOHEADER"
      />
      <Meals 
        meals={meals}
      />
    </Container>
  )
}
