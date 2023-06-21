import { useState } from 'react';
import { Container } from './styles';
import { MainHeader } from '@components/MainHeader';
import { Header } from '@components/Header';
import { Meals } from '@components/Meals';


export function Home() {

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
      <Meals />
    </Container>
  )
}