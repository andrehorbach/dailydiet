import { useEffect, createContext, useState, useCallback } from 'react';
import { Meals, MealProps } from '@components/Meals';
import { Loading } from '@components/Loading';
import { mealsRetrieve } from '@storage/mealsRetrieve';
import { useFocusEffect } from '@react-navigation/native';

export type MealsContextType = {
    totalMeals: number;
    totalOnDiet: number;
    totalOffDiet: number;
    totalPercent: number;
    bestSequence: number;
    onDiet: boolean | undefined;
};

const initialMealsContext: MealsContextType = {   
    totalMeals: 0,
    totalOnDiet: 0,
    totalOffDiet: 0,
    totalPercent: 0,
    bestSequence: 0,
    onDiet: false,
};

interface Props {
  children: React.ReactNode;
}

export const MealsContext = createContext<MealsContextType>(initialMealsContext);

export const MealsProvider: React.FC<Props> = ({ children }) => {
  const [ mealStats, setMealStats ] = useState<MealsContextType>(initialMealsContext)
  const [ meals, setMeals ] = useState<MealProps[]>([]);
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

  useEffect(() => {

    const calculatedTotalMeals = meals.length;
    const calculatedTotalOnDiet = meals.filter((meal) => meal.onDiet).length;
    const calculatedTotalOffDiet = meals.filter((meal) => !meal.onDiet).length;
    const calculatedTotalPercent = Math.round((calculatedTotalOnDiet / calculatedTotalMeals) * 100);
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
    })
  }, [meals]);

    useFocusEffect(useCallback(() => {
        fetchMeals();
        console.log("mealStats - MealsContext");
        console.log(mealStats);
      }, [])
    )

  return (
    <MealsContext.Provider
      value={mealStats}
    >
      {children}
    </MealsContext.Provider>
  );
};