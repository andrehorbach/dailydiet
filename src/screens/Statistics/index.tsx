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


type Props = {
  onDiet?: boolean | null,
  mealStats: {
    totalMeals: number,
    totalOnDiet: number,
    totalOffDiet: number,
    totalPercent: number,
    bestSequence: number, 
  },
}

export function Statistics({onDiet, mealStats}: Props) {

  return(
    <Container>
      <MainHeader 
        headerType="LARGE"
        mealStats={mealStats}
        title="30,21%"
        subTitle="das refeições dentro da dieta"
        onDiet={onDiet}
      />
      <StatisticsContainer>
        <StatisticsText>Estatísticas Gerais</StatisticsText>
        <DataDisplay fullWidth>
          <DataTitle></DataTitle>
          <DataDescription>melhor sequência de pratos dentro da dieta</DataDescription>
        </DataDisplay>
        <DataDisplay fullWidth>
          <DataTitle>22</DataTitle>
          <DataDescription>refeições registradas</DataDescription>
        </DataDisplay>
        <MealsCount >
          <DataDisplay onDiet>
            <DataTitle>22</DataTitle>
            <DataDescription>refeições dentro da dieta</DataDescription>
          </DataDisplay>
          <DataDisplay>
            <DataTitle>23</DataTitle>
            <DataDescription>refeições fora da dieta</DataDescription>
          </DataDisplay>
        </MealsCount>
      </StatisticsContainer>
      
    </Container>
  )
}