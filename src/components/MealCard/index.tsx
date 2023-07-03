import { TouchableOpacityProps } from 'react-native';
import { 
  Container, 
  TimeText, 
  DescriptionText, 
  Divider, 
  CircleIcon
} from './styles';

type Props = TouchableOpacityProps & {
  title: string;
  onDiet: boolean | undefined;
}

export function MealCard({title, onDiet, onPress, ...rest}: Props) {  
  return(
    <Container
      onPress={onPress}
    >
      <TimeText>20:00</TimeText>
      <Divider />
      <DescriptionText>{title}</DescriptionText>
      <CircleIcon 
        type={onDiet ? "PRIMARY" : "SECONDARY"}
      />
    </Container>
  )
}