import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEALS_COLLECTION } from "./storageConfig";
import { mealsRetrieve } from "./mealsRetrieve";
import { AppError } from '@utils/AppError';
import { MealProps } from "@components/Meals";

// const mealsArray = [
//   {
//     mealTitle: "Sanduíche Integral",
//     mealDesc: "Sanduíche de pão integral com atum e salada de alface e tomate",
//     mealDate: new Date(2023, 5, 30, 12, 0),
//     onDiet: true
//   },
//   {
//     mealTitle: "Salada de Frutas",
//     mealDesc: "Uma mistura refrescante de morangos, bananas e melancia",
//     mealDate: new Date(2023, 6, 1, 9, 30),
//     onDiet: true
//   },
//   {
//     mealTitle: "Arroz Integral com Legumes",
//     mealDesc: "Arroz integral com cenoura, ervilha e brócolis",
//     mealDate: new Date(2023, 6, 1, 12, 0),
//     onDiet: true
//   },
//   {
//     mealTitle: "Frango Grelhado com Batata Doce",
//     mealDesc: "Peito de frango grelhado acompanhado de batata doce assada",
//     mealDate: new Date(2023, 6, 2, 19, 0),
//     onDiet: true
//   },
//   {
//     mealTitle: "Sopa de Legumes",
//     mealDesc: "Uma deliciosa sopa quente repleta de legumes frescos",
//     mealDate: new Date(2023, 6, 3, 18, 30),
//     onDiet: true
//   },
//   {
//     mealTitle: "Pizza Margherita",
//     mealDesc: "Deliciosa pizza com mussarela fresca, tomate e manjericão",
//     mealDate: new Date(2023, 6, 4, 20, 0),
//     onDiet: false
//   },
//   {
//     mealTitle: "Cheeseburger com Batatas Fritas",
//     mealDesc: "Hambúrguer clássico com queijo acompanhado de batatas fritas crocantes",
//     mealDate: new Date(2023, 6, 5, 13, 0),
//     onDiet: false
//   },
//   {
//     mealTitle: "Macarrão à Carbonara",
//     mealDesc: "Espaguete com um molho cremoso de bacon e queijo Parmesão",
//     mealDate: new Date(2023, 6, 6, 19, 30),
//     onDiet: false
//   },
//   {
//     mealTitle: "Bife com Purê de Batatas",
//     mealDesc: "Bife macio servido com um purê de batatas cremoso",
//     mealDate: new Date(2023, 6, 7, 18, 0),
//     onDiet: false
//   },
//   {
//     mealTitle: "Sorvete Sundae",
//     mealDesc: "Uma deliciosa sobremesa de sorvete com calda de chocolate, chantilly e confeitos",
//     mealDate: new Date(2023, 6, 8, 15, 0),
//     onDiet: false
//   }
// ];


export async function mealCreate(newMeal: MealProps) {

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
