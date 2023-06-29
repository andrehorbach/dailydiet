import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEALS_COLLECTION } from "./storageConfig";
import { mealsRetrieve } from "./mealsRetrieve";
import { AppError } from '@utils/AppError';

export async function mealCreate(newMeal: string) {

  try {

    const storedMeals = await mealsRetrieve();

    const mealAlreadyExists = storedMeals.includes(newMeal) // arrumar validação pra incluir a data!

    if (mealAlreadyExists) {
      throw new AppError('Esta refeição já foi cadastrada!')
    }

    await AsyncStorage.setItem(MEALS_COLLECTION, JSON.stringify([...storedMeals, newMeal]));

  } catch(err) {
    
      throw(err)

  }
  
}
