import styled, { css } from "styled-components/native";
import { CookingPot } from "phosphor-react-native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  gap: 20px;
`
export const MessageTitle = styled.Text`
  
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_2};  
  `}
  text-align: center;
  width: 50%;
`
export const Message = styled.Text`
  
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_2};  
  `}

  text-align: center;
  width: 50%;
`

export const CookingIcon = styled(CookingPot).attrs(
  ({ theme }) => ({
    size: 72,
    weight: 'regular',
    color: theme.COLORS.GRAY_2,
  })
)``