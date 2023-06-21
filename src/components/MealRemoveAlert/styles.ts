import styled, { css } from "styled-components/native";

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  background-color: rgba(0,0,0,0.25);
  flex: 1;
`

export const Dialog = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
  border-radius: 8px;
  padding: 24px;
  width: 327px;
  height: 192px;
`

export const Title = styled.Text`
  margin-bottom: 8px;
  text-align: center;
  ${({ theme }) => css`
    color:  ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
  `}
`

export const DividerContainer = styled.View`
  flex-direction: row;
  border: 1px solid red;
`