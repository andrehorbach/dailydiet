import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEALS_COLLECTION } from "./storageConfig";
import { mealsRetrieve } from "./mealsRetrieve";
import { MealProps } from "@components/Meals";

export async function mealRemove(mealToRemove: MealProps) {

  try {

    const storedMeals = await mealsRetrieve();

    const updatedMeals = storedMeals.filter(meal => meal !== mealToRemove)

    await AsyncStorage.setItem(MEALS_COLLECTION, JSON.stringify(updatedMeals));

  } catch(err) {
    
      throw(err)

  }
  
}
