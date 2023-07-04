import styled, { css } from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = {
  onDiet: boolean;
}

export const Container = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
  width: 100%;
`

export const Title = styled.Text<Props>`
  color: ${({ theme, onDiet }) => 
    onDiet ? 
    theme.COLORS.GREEN_DARK
    :
    theme.COLORS.RED_DARK
  };
  margin-bottom: 8px;
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XL}px;
  `}
`

export const SubTitle = styled.Text`
  margin-bottom: 40px;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}
`

export const StrongText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}
`

export const FeedbackImage = styled.Image`
  height: 288px;
  width: 224px;
  margin-bottom: 48px;
`