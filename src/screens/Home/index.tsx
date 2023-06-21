import { Container } from './styles';
import { MainHeader } from '@components/MainHeader';
import { Header } from '@components/Header';
import { Meals } from '@components/Meals';


export function Home() {

  return(
    <Container>
      <Header />
      <MainHeader 
        onDiet
      />
      <Meals />
    </Container>
  )
}