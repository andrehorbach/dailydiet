import styled, { css } from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList } from 'react-native';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
  width: 100%;
  height: 100%;
`
export const NewMealContainer = styled.View `
  flex: 1;
  border-radius: 20px;
  top: 72px;
  padding: 33px 24px;
  ${({ theme }) => css`
    background-color: ${ theme.COLORS.GRAY_7};
  `}

`

export const Title = styled.Text`
  ${({ theme }) => css`
      color:  ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    line-height: ${theme.LINE_HEIGHT.DEFAULT}px;
  `}
`
export const DividerContainer = styled.View`
  flex-direction: row;
  gap: 20px;
  
`

export const DateHourInput = styled.View`
  width: 47%;
  justify-content: space-between;
`