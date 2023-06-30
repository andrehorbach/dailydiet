import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEALS_COLLECTION } from "./storageConfig";
import { MealProps } from '@components/Meals';

export async function mealsRetrieve(): Promise<MealProps[]> {

  try {
    const storage = await AsyncStorage.getItem(MEALS_COLLECTION);

    const meals: MealProps[] = storage ? JSON.parse(storage) : [];

    return meals;

  } catch (err) {

    throw(err);

  }
}