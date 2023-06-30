import { useState, useCallback } from 'react';
import { Container } from './styles';
import { MainHeader } from '@components/MainHeader';
import { Header } from '@components/Header';
import { Meals, MealProps } from '@components/Meals';
import { Loading } from '@components/Loading';
import { mealsRetrieve } from '@storage/mealsRetrieve';
import { useFocusEffect } from '@react-navigation/native';


export function Home() {

  const [ meals, setMeals ] = useState<MealProps[]>([])
  const [ dietStatus, setDietStatus] = useState<boolean | null>(true);
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

  return(
    <Container>
      <Header />
      <MainHeader 
        onDiet={dietStatus}
        headerType="NOHEADER"
        title='90,86%'
        subTitle='das refeições dentro da dieta'
      />
      <Meals 
        meals={meals}
      />
    </Container>
  )
}