import styled, { css } from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList } from 'react-native';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
  width: 100%;
  height: 100%;
  margin-bottom: 5%;
`
export const MealContainer = styled.View `
  flex: 1;
  border-radius: 20px;
  top: 104px;
  padding: 33px 24px;
  ${({ theme }) => css`
    background-color: ${ theme.COLORS.GRAY_7};
  `}

`
export const MealTitle = styled.Text`
  margin-bottom: 8px;
  ${({ theme }) => css`
    color:  ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: 20px;
  `}
`

export const MealDescription = styled.Text`
  ${({ theme }) => css`
      color:  ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}
  margin-bottom: 24px;
`

export const DateTimeTitle = styled.Text`
  margin-bottom: 8px;
  ${({ theme }) => css`
      color:  ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
`

export const DateTimeDescription = styled.Text`
  margin-bottom: 24px;
  ${({ theme }) => css`
      color:  ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
`
