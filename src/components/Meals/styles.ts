import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  width: 100%;
  gap: 8px;
  
`

export const Title = styled.Text`
  ${({ theme })=> css`
    color:  ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}
`

export const Dates = styled.Text`
  ${({ theme })=> css`
    color:  ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
    line-height: ${theme.LINE_HEIGHT.DEFAULT}px;
  `}
  margin-top: 24px;
`