import { useState, useCallback, useEffect } from 'react';
import { Container } from './styles';
import { MainHeader } from '@components/MainHeader';
import { Header } from '@components/Header';
import { Meals, MealProps } from '@components/Meals';
import { mealsRetrieve } from '@storage/mealsRetrieve';
import { useFocusEffect } from '@react-navigation/native';
import { Loading } from '@components/Loading';
import { mealsReset } from '@storage/mealsReset';

export function Home() {

  const [ meals, setMeals ] = useState<MealProps[]>([]);
  const [ onDietStatus, setOnDietStatus] = useState<boolean | null>(true);
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

  // mealsReset();
  
  return(
    <>
      { isLoading ? <Loading /> : "" }
      <Container>
        <Header />
        <MainHeader 
          onDiet={mealStats.onDiet}
          mealStats={mealStats}
          title={
            isNaN(mealStats.totalPercent) ? "0%"
            : mealStats.totalPercent.toString() + "%"
          }
          subTitle={
            isNaN(mealStats.totalPercent) ? 'Sem refeições cadastradas!'
            : 'das refeições dentro da dieta'
          }
          headerType="NOHEADER"
        />
        <Meals 
          meals={meals}
        />
      </Container>
    </>
  )
}
