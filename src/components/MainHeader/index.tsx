import { TouchableWithoutFeedback } from "react-native";
import { useNavigation, useRoute } from '@react-navigation/native';
import { Container, Title, SubTitle, ArrowTopIcon, ArrowLeftIcon, Button } from './styles';

type Props = {
  asHeader?: boolean,
  onDiet?: boolean,
  newMeal?: boolean,
}


export function MainHeader({asHeader = false, onDiet = false, newMeal = false }: Props) {  

  const navigation = useNavigation();
  const route = useRoute();


  function handleNavigate() {
    asHeader 
    ? 
    navigation.navigate('home') 
    :
    navigation.navigate('statistics') 
  }

  return(
    <>
      <TouchableWithoutFeedback
        onPress={asHeader ? undefined : handleNavigate}
      >
        <Container
          asHeader={asHeader}
          onDiet={onDiet}
          newMeal
        >
          <Title>30,21%</Title>
          <SubTitle>das refeições dentro da dieta</SubTitle>
          { asHeader ?  
          <Button
           onPress={handleNavigate}
          >
            <ArrowLeftIcon 
              onDiet={onDiet}  
              onPress={handleNavigate}      
            />
          </Button>
          : 
          <ArrowTopIcon 
            onDiet={onDiet}
          />}
        </Container>
     </TouchableWithoutFeedback>
   </>
  )
}