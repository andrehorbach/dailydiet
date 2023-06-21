import styled, { css } from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { ArrowUpRight, ArrowLeft } from "phosphor-react-native";

type Props = {
  onDiet?: boolean;
  asHeader?: boolean;
  newMeal?: boolean,
  onPress?: ()=> void;
}

export const Container = styled.View.attrs<Props>(({ theme, onDiet, asHeader, newMeal }) =>({
  backgroundColor: onDiet && !newMeal ? theme.COLORS.GREEN_LIGHT 
  : !newMeal ? theme.COLORS.RED_LIGHT
  : theme.COLORS.GRAY_5,
  position: asHeader ? "absolute" : "static",
  height: asHeader ? 200 : 102,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  }))<Props>`
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  width: 100%;
  margin-bottom: 40px;
`

export const Title = styled.Text`
  ${({ theme })=> css`
    color:  ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XXL}px;
  `}
`

export const SubTitle = styled.Text`
  ${({ theme })=> css`
    color:  ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    line-height: ${theme.LINE_HEIGHT.DEFAULT}px;
  `}
`

export const Button = styled(TouchableOpacity)<Props>`
  position: absolute;
  top: 40px;
  left: 16px;
  margin: 8px;
  z-index: 999;
`

export const ArrowTopIcon = styled(ArrowUpRight).attrs<Props>(
  ({ theme, onDiet }) => ({
    size: 24,
    weight: 'regular',
    color: onDiet ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
  }))<Props>`
  position: absolute;
  top: 0;
  right: 0;
  margin: 8px;
`;

export const ArrowLeftIcon = styled(ArrowLeft).attrs<Props>(
  ({ theme, onDiet }) => ({
    size: 24,
    weight: 'regular',
    color: onDiet ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
  }))<Props>`

`;