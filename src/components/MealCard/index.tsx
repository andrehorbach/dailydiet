import { TouchableOpacityProps } from 'react-native';
import { 
  Container, 
  TimeText, 
  DescriptionText, 
  Divider, 
  CircleIcon
} from './styles';
import { MealProps } from '@components/Meals';
import { format } from 'date-fns';

type Props = TouchableOpacityProps & {
  meal: MealProps,
}

export function MealCard({meal, onPress, ...rest}: Props) {  

  return(
    <Container
      onPress={onPress}
    >
      <TimeText>{format(new Date(meal.mealDate), "hh:mm")}</TimeText>
      <Divider />
      <DescriptionText>{meal.mealTitle.substring(0, 28) + (meal.mealTitle.length >= 28 ? "..." : "")}</DescriptionText>
      <CircleIcon 
        type={meal.onDiet ? "PRIMARY" : "SECONDARY"}
      />
    </Container>
  )
}