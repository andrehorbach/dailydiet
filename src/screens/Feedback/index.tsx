import { Container, Title, SubTitle, StrongText, FeedbackImage } from "./styles";
import feedbackImg from '@assets/feedback.png';
import { Button } from "@components/Button";
import { useNavigation, useRoute } from '@react-navigation/native';


export function Feedback() {

  const navigation = useNavigation();

  function handlePress() {
    navigation.navigate('home');
  }

  return(
    <Container>
        <Title>Continue assim!</Title>
        <SubTitle>Você continua <StrongText>dentro da dieta</StrongText>. Muito bem!</SubTitle>
        <FeedbackImage 
          source={feedbackImg}
        />
        <Button
          title="Ir para página inicial"
          onPress={handlePress}
        />
    </Container>
  )

}