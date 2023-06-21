import { TextInput  } from 'react-native';
import styled, { css } from "styled-components/native";


export const Container = styled(TextInput)`

  min-height: 48px;
  max-height: 48px;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    border: 1px solid ${theme.COLORS.GRAY_5};
    line-height: ${theme.LINE_HEIGHT.DEFAULT}px;
  `}
  
  border-radius: 6px; 
  padding: 14px;
  margin-bottom: 24px;
  
`