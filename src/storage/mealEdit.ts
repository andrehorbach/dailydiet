import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEALS_COLLECTION } from "./storageConfig";
import { mealsRetrieve } from "./mealsRetrieve";
import { AppError } from '@utils/AppError';
import { MealProps } from "@components/Meals";


export async function mealEdit(mealToEdit: MealProps) {

  try {

    const storedMeals = await mealsRetrieve();

    storedMeals.forEach((meal, index) => {
      if (meal.mealId === mealToEdit.mealId) {
        storedMeals[index] = mealToEdit;
      }
    })

    await AsyncStorage.setItem(MEALS_COLLECTION, JSON.stringify(storedMeals));

  } catch(err) {
    
      throw(err)

  }
  
}
