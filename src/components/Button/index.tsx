import { TouchableOpacityProps } from "react-native";
import { 
  Container, 
  ButtonTypeStyleProps, 
  Title, 
  PlusIcon, 
  PencilIcon, 
  TrashIcon
} from "./styles";
import { IconProps } from "phosphor-react-native";


type Props = TouchableOpacityProps & {
  title: string;
  type?: ButtonTypeStyleProps;
  noMargin?: boolean;
  iconName?: "PLUS" | "PENCIL" | "TRASH"
}



// TRY TO SET COLORS TO FIGMA DESIGN WHEN BUTTONS ARE PRESSED
// CHATGPT SUGERE USAR TOUCHABLE WITHOUT FEEDBACK, COM MAIOR COMPLEXIDADE

export function Button({title, type = "PRIMARY", noMargin, onPress, iconName, ...rest}: Props) {

  return( 
      <Container
        type={type}
        onPress={onPress}
        noMargin={noMargin}
        {...rest}
      >
        {iconName === "PENCIL" && <PencilIcon type={type} />}
        {iconName === "PLUS" && <PlusIcon type={type} />}
        {iconName === "TRASH" && <TrashIcon type={type} />}
        <Title
          type={type}
        >
          {title}
        </Title>
      </Container>
  );
}