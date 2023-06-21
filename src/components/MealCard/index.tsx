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
}

export function MealCard({title, onPress, ...rest}: Props) {  
  return(
    <Container
      onPress={onPress}
    >
      <TimeText>20:00</TimeText>
      <Divider />
      <DescriptionText>{title}</DescriptionText>
      <CircleIcon 
      />
    </Container>
  )
}