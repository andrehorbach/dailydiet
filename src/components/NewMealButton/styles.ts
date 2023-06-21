
import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";
import { Circle, PencilSimpleLine, Trash } from "phosphor-react-native";

export type ButtonTypeStyleProps = "PRIMARY" | "SECONDARY"

type Props = {
  type: ButtonTypeStyleProps;
  selected?: boolean;
}

export const Container = styled(TouchableOpacity)<Props>`
  width: 47%;
  flex-direction: row;
  gap: 8px;
  min-height: 50px;
  max-height: 50px;
  border: 1px solid;
  border-radius: 6px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme, type, selected }) => 
    type === "PRIMARY" && selected ? 
    theme.COLORS.GREEN_LIGHT 
    :
    type === "SECONDARY" && selected ? 
    theme.COLORS.RED_LIGHT
    : 
    theme.COLORS.GRAY_6
  };
  border-color: ${({ theme, type, selected }) => 
    type === "PRIMARY" && selected ? 
    theme.COLORS.GREEN_DARK 
    :
    type === "SECONDARY" && selected ? 
    theme.COLORS.RED_DARK
    : 
    theme.COLORS.GRAY_6
  };
`

export const Title = styled.Text<Props>`
  line-height: 24px;
  ${({ theme })=> css`
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}
`

export const CircleIcon = styled(Circle).attrs<Props>(
  ({ theme, type }) => ({
    size: 12,
    weight: "fill",
    color: type === "PRIMARY" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
  })
)<Props>``;
