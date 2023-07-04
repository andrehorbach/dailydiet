import { Container, Title, SubTitle, StrongText, FeedbackImage } from "./styles";
import feedbackYES from '@assets/feedbackYES.png';
import feedbackNO from '@assets/feedbackNO.png';
import { Button } from "@components/Button";
import { useNavigation, useRoute } from '@react-navigation/native';

type RouteParams = {
  onDiet: boolean
}

export function Feedback() {

  const navigation = useNavigation();

  function handlePress() {
    navigation.navigate('home');
  }

  const route = useRoute();
  const { onDiet } = route.params as RouteParams;

  return(
    <Container>
        <Title
          onDiet={onDiet}
        >
          {onDiet ? "Continue assim!" : "Que pena!"}
        </Title>
          {onDiet ? 
            <SubTitle>
              Você continua <StrongText>dentro da dieta</StrongText>. Muito bem! 
            </SubTitle>
            : <SubTitle>
                Você <StrongText>saiu da dieta</StrongText> dessa vez, mas continue se esforçando e não desista!
              </SubTitle>
          }  
       
        <FeedbackImage 
          source={ onDiet? feedbackYES : feedbackNO}
        />
        <Button
          title="Ir para página inicial"
          onPress={handlePress}
        />
    </Container>
  )

}