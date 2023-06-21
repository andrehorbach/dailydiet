import styled, { css } from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";


type DataDisplayProps = {
  fullWidth?: boolean;
  onDiet?: boolean;
}

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
  /* overflow-x: visible; */
  width: 100%;
`

export const StatisticsContainer = styled.View `
  border-radius: 20px;
  align-items: center;
  top: 168px;
  padding: 33px 24px;
  ${({ theme }) => css`
    background-color: ${ theme.COLORS.GRAY_7};
    border: 1px solid ${theme.COLORS.GRAY_7};
  `}
`

export const StatisticsText = styled.Text`
  margin-bottom: 12px;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`

export const DataDisplay = styled.View<DataDisplayProps>`
  align-items: center;
  margin-top: 12px;
  border-radius: 8px;
  padding: 16px;
  width: ${({ fullWidth }) => 
      fullWidth ? "100%" : "48%"
    };
  background-color: ${({ theme, onDiet, fullWidth }) => 
    onDiet && !fullWidth ? theme.COLORS.GREEN_LIGHT
    : !onDiet && !fullWidth ? theme.COLORS.RED_LIGHT 
    : theme.COLORS.GRAY_6
    };
  
`
export const DataTitle = styled.Text`
  margin-bottom: 8px;
  text-align: center;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`

export const DataDescription = styled.Text`
  text-align: center;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`

export const MealsCount = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`