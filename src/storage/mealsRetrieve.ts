import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEALS_COLLECTION } from "./storageConfig";

export async function mealsRetrieve() {

  try {
    const storage = await AsyncStorage.getItem(MEALS_COLLECTION);

    const meals: string[] = storage ? JSON.parse(storage) : [];

    return meals;

  } catch (err) {

     throw(err);

  }
}