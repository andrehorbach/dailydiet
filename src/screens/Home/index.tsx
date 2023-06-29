import { useState } from 'react';
import { Container } from './styles';
import { MainHeader } from '@components/MainHeader';
import { Header } from '@components/Header';
import { Meals } from '@components/Meals';


export function Home() {

  const mealsArray = [
    {
      mealTitle: "Sanduíche Integral",
      mealDesc: "Sanduíche de pão integral com atum e salada de alface e tomate",
      mealDate: new Date(2023, 5, 30, 12, 0),
      onDiet: true
    },
    {
      mealTitle: "Salada de Frutas",
      mealDesc: "Uma mistura refrescante de morangos, bananas e melancia",
      mealDate: new Date(2023, 6, 1, 9, 30),
      onDiet: true
    },
    {
      mealTitle: "Arroz Integral com Legumes",
      mealDesc: "Arroz integral com cenoura, ervilha e brócolis",
      mealDate: new Date(2023, 6, 1, 12, 0),
      onDiet: true
    },
    {
      mealTitle: "Frango Grelhado com Batata Doce",
      mealDesc: "Peito de frango grelhado acompanhado de batata doce assada",
      mealDate: new Date(2023, 6, 2, 19, 0),
      onDiet: true
    },
    {
      mealTitle: "Sopa de Legumes",
      mealDesc: "Uma deliciosa sopa quente repleta de legumes frescos",
      mealDate: new Date(2023, 6, 3, 18, 30),
      onDiet: true
    }
  ];

  const [ dietStatus, setDietStatus] = useState<boolean | null>(true);

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
        meals={mealsArray}
      />
    </Container>
  )
}