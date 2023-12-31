import { TouchableOpacity } from 'react-native';
import styled, { css } from "styled-components/native";
import { Circle } from "phosphor-react-native";

export type ButtonTypeStyleProps = "PRIMARY" | "SECONDARY"

type Props = {
  type: ButtonTypeStyleProps;
}

export const Container = styled(TouchableOpacity)`
  flex-direction: row;
  gap: 12px;
  margin-bottom: 8px;
  align-items: center;
  width: 100%;
  height: 50px;
  padding: 12px;  
  border: 1px;
  border-radius: 6px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_5};

`

export const TimeText = styled.Text`
  ${({ theme })=> css`
    color:  ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XS}px;
    line-height: ${({ theme }) => theme.LINE_HEIGHT.DEFAULT}px;
  `}
  
`

export const DescriptionText = styled.Text`
  ${({ theme })=> css`
    color:  ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}
`

export const Divider = styled.View`
  height: 14px;
  width: 1px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_4};
`

export const CircleIcon = styled(Circle).attrs<Props>(
  ({ theme, type }) => ({
    size: 18,
    weight: 'fill',
    color: type === "PRIMARY" ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID,
  })
)<Props>`
  margin-left: auto;
  margin-right: 4px;
`;
