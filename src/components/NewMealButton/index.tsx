import { TouchableOpacityProps } from "react-native";
import { 
  Container, 
  ButtonTypeStyleProps, 
  Title, 
  CircleIcon
} from "./styles";
import { IconProps } from "phosphor-react-native";


type Props = TouchableOpacityProps & {
  title: string;
  type?: ButtonTypeStyleProps;
  selected?: boolean;
}



// TRY TO SET COLORS TO FIGMA DESIGN WHEN BUTTONS ARE PRESSED
// CHATGPT SUGERE USAR TOUCHABLE WITHOUT FEEDBACK, COM MAIOR COMPLEXIDADE

export function NewMealButton({title, type = "PRIMARY", onPress, selected = undefined, ...rest}: Props) {

  return( 
      <Container
        type={type}
        onPress={onPress}
        selected={selected}
        {...rest}
      >
        {<CircleIcon type={type} />}
        <Title
          type={type}
        >
          {title}
        </Title>
      </Container>
  );
}