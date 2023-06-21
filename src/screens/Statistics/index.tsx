import { 
  Container, 
  StatisticsContainer, 
  StatisticsText, 
  DataDisplay, 
  DataTitle, 
  DataDescription,
  MealsCount
} from './styles';
import { MainHeader } from '@components/MainHeader';
import { View } from 'react-native';

export function Statistics() {

  return(
    <Container>
      <MainHeader 
        headerType="LARGE"
        title="30,21%"
        subTitle="das refeições dentro da dieta"
        onDiet
      />
      <StatisticsContainer>
        <StatisticsText>Estatísticas Gerais</StatisticsText>
        <DataDisplay fullWidth>
          <DataTitle>22</DataTitle>
          <DataDescription>melhor sequência de pratos dentro da dieta</DataDescription>
        </DataDisplay>
        <DataDisplay fullWidth>
          <DataTitle>22</DataTitle>
          <DataDescription>melhor sequência de pratos dentro da dieta</DataDescription>
        </DataDisplay>
        <MealsCount >
          <DataDisplay onDiet>
            <DataTitle>22</DataTitle>
            <DataDescription>teste1</DataDescription>
          </DataDisplay>
          <DataDisplay>
            <DataTitle>23</DataTitle>
            <DataDescription>teste2</DataDescription>
          </DataDisplay>
        </MealsCount>
      </StatisticsContainer>
      
    </Container>
  )
}