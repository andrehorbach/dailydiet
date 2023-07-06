import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEALS_COLLECTION } from "./storageConfig";

const mealsArray = [
  {
    mealId: 0,
    mealTitle: "Sanduíche Integral",
    mealDesc: "Sanduíche de pão integral com atum e salada de alface e tomate",
    mealDate: new Date(2023, 5, 30, 12, 0),
    onDiet: true
  },
  // {
  //   mealId: 1,
  //   mealTitle: "Salada de Frutas",
  //   mealDesc: "Uma mistura refrescante de morangos, bananas e melancia",
  //   mealDate: new Date(2023, 6, 1, 9, 30),
  //   onDiet: true
  // },
  // {
  //   mealId: 2,
  //   mealTitle: "Arroz Integral com Legumes",
  //   mealDesc: "Arroz integral com cenoura, ervilha e brócolis",
  //   mealDate: new Date(2023, 6, 1, 12, 0),
  //   onDiet: true
  // },
  // {
  //   mealId: 3,
  //   mealTitle: "Frango Grelhado com Batata Doce",
  //   mealDesc: "Peito de frango grelhado acompanhado de batata doce assada",
  //   mealDate: new Date(2023, 6, 2, 19, 0),
  //   onDiet: true
  // },
  // {
  //   mealId: 4,
  //   mealTitle: "Sopa de Legumes",
  //   mealDesc: "Uma deliciosa sopa quente repleta de legumes frescos",
  //   mealDate: new Date(2023, 6, 3, 18, 30),
  //   onDiet: true
  // },
  // {
  //   mealId: 5,
  //   mealTitle: "Pizza Margherita",
  //   mealDesc: "Deliciosa pizza com mussarela fresca, tomate e manjericão",
  //   mealDate: new Date(2023, 6, 4, 20, 0),
  //   onDiet: false
  // },
  // {
  //   mealId: 6,
  //   mealTitle: "Cheeseburger com Batatas Fritas",
  //   mealDesc: "Hambúrguer clássico com queijo acompanhado de batatas fritas crocantes",
  //   mealDate: new Date(2023, 6, 5, 13, 0),
  //   onDiet: false
  // },
  // {
  //   mealId: 7,
  //   mealTitle: "Macarrão à Carbonara",
  //   mealDesc: "Espaguete com um molho cremoso de bacon e queijo Parmesão",
  //   mealDate: new Date(2023, 6, 6, 19, 30),
  //   onDiet: false
  // },
  // {
  //   mealId: 8,
  //   mealTitle: "Bife com Purê de Batatas",
  //   mealDesc: "Bife macio servido com um purê de batatas cremoso",
  //   mealDate: new Date(2023, 6, 7, 18, 0),
  //   onDiet: false
  // },
  // {
  //   mealId: 9,
  //   mealTitle: "Sorvete Sundae",
  //   mealDesc: "Uma deliciosa sobremesa de sorvete com calda de chocolate, chantilly e confeitos",
  //   mealDate: new Date(2023, 6, 8, 15, 0),
  //   onDiet: false
  // },
  // {
  //   mealId: 10,
  //   mealTitle: "Omelete de Legumes",
  //   mealDesc: "Omelete feito com ovos, tomate, cebola e pimentão",
  //   mealDate: new Date(2023, 6, 8, 8, 0),
  //   onDiet: true
  // },
  // {
  //   mealId: 11,
  //   mealTitle: "Salada de Grão-de-Bico",
  //   mealDesc: "Salada fresca com grão-de-bico, tomate e pepino",
  //   mealDate: new Date(2023, 6, 8, 12, 30),
  //   onDiet: true
  // },
  // {
  //   mealId: 12,
  //   mealTitle: "Peixe Assado com Legumes",
  //   mealDesc: "Peixe assado no forno acompanhado de legumes ao vapor",
  //   mealDate: new Date(2023, 6, 9, 19, 0),
  //   onDiet: true
  // },
  // {
  //   mealId: 13,
  //   mealTitle: "Smoothie de Frutas",
  //   mealDesc: "Bebida refrescante feita com frutas variadas e iogurte",
  //   mealDate: new Date(2023, 6, 9, 10, 0),
  //   onDiet: true
  // },
  // {
  //   mealId: 14,
  //   mealTitle: "Lasanha de Legumes",
  //   mealDesc: "Lasanha vegetariana com camadas de massa, legumes e queijo",
  //   mealDate: new Date(2023, 6, 9, 13, 30),
  //   onDiet: true
  // },
  // {
  //   mealId: 15,
  //   mealTitle: "Hambúrguer Vegano",
  //   mealDesc: "Hambúrguer de feijão preto e legumes acompanhado de salada",
  //   mealDate: new Date(2023, 6, 10, 12, 0),
  //   onDiet: true
  // },
  // {
  //   mealId: 16,
  //   mealTitle: "Risoto de Cogumelos",
  //   mealDesc: "Risoto cremoso preparado com cogumelos frescos",
  //   mealDate: new Date(2023, 6, 10, 19, 30),
  //   onDiet: true
  // },
  // {
  //   mealId: 17,
  //   mealTitle: "Frango com Quinoa",
  //   mealDesc: "Peito de frango grelhado acompanhado de quinoa e legumes",
  //   mealDate: new Date(2023, 6, 11, 18, 0),
  //   onDiet: true
  // },
  // {
  //   mealId: 18,
  //   mealTitle: "Tacos de Peixe",
  //   mealDesc: "Tacos recheados com peixe grelhado, repolho e molho de iogurte",
  //   mealDate: new Date(2023, 6, 11, 12, 30),
  //   onDiet: true
  // },
  // {
  //   mealId: 19,
  //   mealTitle: "Massa com Molho de Tomate",
  //   mealDesc: "Espaguete com molho de tomate caseiro e manjericão",
  //   mealDate: new Date(2023,6, 12, 19, 20),
  //   onDiet: false
  // },
  // {
  //   mealId: 20,
  //   mealTitle: "Torta de Frango",
  //   mealDesc: "Torta de frango caseira com massa crocante",
  //   mealDate: new Date(2023, 6, 12, 13, 0),
  //   onDiet: false
  // },
  // {
  //   mealId: 21,
  //   mealTitle: "Wrap Vegetariano",
  //   mealDesc: "Wrap recheado com vegetais frescos e molho de iogurte",
  //   mealDate: new Date(2023, 6, 12, 18, 30),
  //   onDiet: false
  // },
  // {
  //   mealId: 22,
  //   mealTitle: "Peixe com Molho de Limão",
  //   mealDesc: "Filé de peixe grelhado com molho de limão e ervas",
  //   mealDate: new Date(2023, 6, 13, 19, 0),
  //   onDiet: false
  // },
  // {
  //   mealId: 23,
  //   mealTitle: "Salada Caprese",
  //   mealDesc: "Salada clássica italiana com tomate, mussarela de búfala e manjericão",
  //   mealDate: new Date(2023, 6, 13, 12, 0),
  //   onDiet: false
  // },
  // {
  //   mealId: 24,
  //   mealTitle: "Tacos de Carne",
  //   mealDesc: "Tacos recheados com carne moída, queijo e vegetais",
  //   mealDate: new Date(2023, 6, 14, 13, 30),
  //   onDiet: false
  // },
  // {
  //   mealId: 25,
  //   mealTitle: "Espaguete à Bolonhesa",
  //   mealDesc: "Espaguete com molho de carne à bolonhesa",
  //   mealDate: new Date(2023, 6, 14, 19, 30),
  //   onDiet: false
  // },
  // {
  //   mealId: 26,
  //   mealTitle: "Frango Assado com Legumes",
  //   mealDesc: "Frango assado no forno com legumes variados",
  //   mealDate: new Date(2023, 6, 15, 18, 0),
  //   onDiet: false
  // },
  // {
  //   mealId: 27,
  //   mealTitle: "Sushi Variado",
  //   mealDesc: "Uma seleção de sushi fresco com diferentes tipos de peixe",
  //   mealDate: new Date(2023, 6, 15, 12, 30),
  //   onDiet: false
  // },
  // {
  //   mealId: 28,
  //   mealTitle: "Ratatouille",
  //   mealDesc: "Prato francês com legumes assados em molho de tomate",
  //   mealDate: new Date(2023, 6, 16, 13, 0),
  //   onDiet: true
  // },
  // {
  //   mealId: 29,
  //   mealTitle: "Smoothie Verde",
  //   mealDesc: "Bebida saudável feita com espinafre, banana e maçã",
  //   mealDate: new Date(2023, 6, 16, 9, 0),
  //   onDiet: true
  // },
  // {
  //   mealId: 30,
  //   mealTitle: "Burger Vegano deGrão-de-Bico",
  //   mealDesc: "Hambúrguer vegano feito com grão-de-bico e temperos",
  //   mealDate: new Date(2023, 6, 16, 18, 30),
  //   onDiet: true
  // },
  // {
  //   mealId: 31,
  //   mealTitle: "Peixe Grelhado com Molho de Maracujá",
  //   mealDesc: "Filé de peixe grelhado com molho de maracujá e arroz branco",
  //   mealDate: new Date(2023, 6, 17, 19, 0),
  //   onDiet: true
  // },
  // {
  //   mealId: 32,
  //   mealTitle: "Salada Caesar",
  //   mealDesc: "Salada clássica com alface, croutons, queijo parmesão e molho Caesar",
  //   mealDate: new Date(2023, 6, 17, 12, 0),
  //   onDiet: true
  // },
  // {
  //   mealId: 33,
  //   mealTitle: "Tacos de Frango",
  //   mealDesc: "Tacos recheados com frango desfiado, abacate e coentro",
  //   mealDate: new Date(2023, 6, 17, 13, 30),
  //   onDiet: true
  // },
  // {
  //   mealId: 34,
  //   mealTitle: "Massa com Molho Pesto",
  //   mealDesc: "Espaguete com molho pesto de manjericão e nozes",
  //   mealDate: new Date(2023, 6, 18, 19, 30),
  //   onDiet: true
  // },
  // {
  //   mealId: 35,
  //   mealTitle: "Frango à Parmegiana",
  //   mealDesc: "Peito de frango empanado e frito com molho de tomate e queijo derretido",
  //   mealDate: new Date(2023, 6, 18, 18, 0),
  //   onDiet: false
  // },
  // {
  //   mealId: 36,
  //   mealTitle: "Salada de Quinoa",
  //   mealDesc: "Salada nutritiva com quinoa, legumes e castanhas",
  //   mealDate: new Date(2023, 6, 19, 12, 30),
  //   onDiet: true
  // },
  // {
  //   mealId: 37,
  //   mealTitle: "Sopa de Abóbora",
  //   mealDesc: "Sopa cremosa de abóbora com crème fraîche",
  //   mealDate: new Date(2023, 6, 19, 18, 30),
  //   onDiet: true
  // },
  // {
  //   mealId: 38,
  //   mealTitle: "Wrap de Frango",
  //   mealDesc: "Wrap recheado com frango grelhado, alface e molho de iogurte",
  //   mealDate: new Date(2023, 6, 19, 13, 0),
  //   onDiet: true
  // },
  // {
  //   mealId: 39,
  //   mealTitle: "Peixe ao Molho de Laranja",
  //   mealDesc: "Filé de peixe grelhado com molho de laranja e arroz integral",
  //   mealDate: new Date(2023, 6, 20, 19, 0),
  //   onDiet: true
  // },
  // {
  //   mealId: 40,
  //  mealTitle: "Salada de Frutas",
  //   mealDesc: "Uma seleção refrescante de frutas variadas",
  //   mealDate: new Date(2023, 6, 20, 12, 0),
  //   onDiet: true
  // },
  // {
  //   mealId: 41,
  //   mealTitle: "Bife com Purê de Batatas",
  //   mealDesc: "Bife grelhado acompanhado de purê de batatas cremoso",
  //   mealDate: new Date(2023, 6, 20, 18, 0),
  //   onDiet: false
  // },
  // {
  //   mealId: 42,
  //   mealTitle: "Salada de Macarrão",
  //   mealDesc: "Salada de macarrão com vegetais, queijo feta e molho de limão",
  //   mealDate: new Date(2023, 6, 21, 12, 30),
  //   onDiet: true
  // },
  // {
  //   mealId: 43,
  //   mealTitle: "Frango Teriyaki",
  //   mealDesc: "Peito de frango grelhado com molho teriyaki e arroz branco",
  //   mealDate: new Date(2023, 6, 21, 18, 0),
  //   onDiet: false
  // },
  // {
  //   mealId: 44,
  //   mealTitle: "Sanduíche de Atum",
  //   mealDesc: "Sanduíche de atum com alface, tomate e maionese",
  //   mealDate: new Date(2023, 6, 21, 13, 0),
  //   onDiet: false
  // },
  // {
  //   mealId: 45,
  //   mealTitle: "Risoto de Frutos do Mar",
  //   mealDesc: "Risoto cremoso preparado com frutos do mar frescos",
  //   mealDate: new Date(2023, 6, 22, 19, 30),
  //   onDiet: false
  // },
  // {
  //   mealId: 46,
  //   mealTitle: "Salada de Folhas Verdes",
  //   mealDesc: "Salada leve com folhas verdes, legumes e vinagrete",
  //   mealDate: new Date(2023, 6, 22, 12, 0),
  //   onDiet: true
  // },
  // {
  //   mealId: 47,
  //   mealTitle: "Hambúrguer com Batatas Fritas",
  //   mealDesc: "Hambúrguer suculento com batatas fritas crocantes",
  //   mealDate: new Date(2023, 6, 22, 18, 0),
  //   onDiet: false
  // },
  // {
  //   mealId: 48,
  //   mealTitle: "Salmão Grelhado",
  //   mealDesc: "Filé de salmão grelhado com molho de limão e ervas",
  //   mealDate: new Date(2023, 6, 23, 19, 0),
  //   onDiet: false
  // },
  // {
  //   mealId: 49,
  //   mealTitle: "Tabule",
  //   mealDesc: "Salada árabe de trigo, salsa, hortelã e tomate",
  //   mealDate: new Date(2023, 6, 23, 12, 30),
  //   onDiet: true
  // },
  // {
  //   mealId: 50,
  // mealTitle: "Pizza Margherita",
  //   mealDesc: "Pizza clássica italiana com molho de tomate, queijo mozzarella e manjericão",
  //   mealDate: new Date(2023, 6, 23, 13, 0),
  //   onDiet: false
  // }
];


export async function mealsReset() {

  try {

    
    await AsyncStorage.setItem(MEALS_COLLECTION, JSON.stringify([]));

  } catch(err) {
    
      throw(err)

  }
  
}
