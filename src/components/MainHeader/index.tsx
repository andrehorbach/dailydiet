import { TouchableWithoutFeedback } from "react-native";
import { useNavigation, useRoute } from '@react-navigation/native';
import { 
  Container, 
  Title, 
  SubTitle, 
  ArrowTopIcon, 
  ArrowLeftIcon, 
  Button,
  MainHeaderStyleProps 
} from './styles';

type Props = {
  headerType?: MainHeaderStyleProps,
  onDiet?: boolean | null,
  newMeal?: boolean,
  title?: string;
  subTitle?: string;
  mealStats?: {
    totalMeals: number;
    totalOnDiet: number;
    totalOffDiet: number;
    totalPercent: number;
    bestSequence: number;
    onDiet: boolean | undefined;
  },
}


export function MainHeader({
  headerType, 
  onDiet = false, 
  newMeal = false,
  mealStats,
  title,
  subTitle,
}: Props) {  

  const navigation = useNavigation();
  const route = useRoute();


  function handleNavigate() {
    headerType !== "NOHEADER"
    ? 
    navigation.goBack()
    :
    navigation.navigate('statistics') 
  }
 
  return(
    <>
      <TouchableWithoutFeedback
        onPress={headerType === "NOHEADER" ? handleNavigate : undefined }
      >
        <Container
          headerType={headerType}
          onDiet={onDiet}
          newMeal
        >
          <Title headerType={headerType}>
            {title}
          </Title>
          <SubTitle>{subTitle}</SubTitle>
          { headerType !== "NOHEADER" ?  
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