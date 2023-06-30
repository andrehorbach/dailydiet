import { 
  Container, 
  ButtonTypeStyleProps, 
  Title, 
  CircleIcon
} from "./styles";
import { IconProps } from "phosphor-react-native";


type Props = {
  title: string;
  type?: ButtonTypeStyleProps;
  selected?: boolean;
  onDiet?: boolean;
}


export function MealDisplayDiet({title, type = "PRIMARY", selected = undefined, onDiet, ...rest}: Props) {

  return( 
      <Container
        type={type}
        selected={selected}
        {...rest}
      >
        {<CircleIcon type={onDiet ? "PRIMARY" : "SECONDARY"} />}
        <Title
          type={type}
        >
          {title}
        </Title>
      </Container>
  );
}