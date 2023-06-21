
import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";
import { Plus, PencilSimpleLine, Trash } from "phosphor-react-native";

export type ButtonTypeStyleProps = "PRIMARY" | "SECONDARY"

type Props = {
  type: ButtonTypeStyleProps;
}

export const Container = styled(TouchableOpacity)<Props>`
  flex: 1;
  flex-direction: row;
  gap: 8px;
  min-height: 50px;
  max-height: 50px;
  border: 1px;
  margin: 0 24px 8px 24px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_1};
  border-radius: 6px;
  justify-content: center;
  align-items: center;
  padding: 0 24px;
  background-color: ${({ theme, type }) => 
    type === "PRIMARY" ? 
    theme.COLORS.GRAY_2 : theme.COLORS.GRAY_7
  };
`

export const Title = styled.Text<Props>`
  color: ${({ theme , type }) => 
      type === "PRIMARY" ? 
      theme.COLORS.GRAY_6 : theme.COLORS.GRAY_2
    };

  ${({ theme })=> css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
`

export const PlusIcon = styled(Plus).attrs<Props>(
  ({ theme, type }) => ({
    size: 18,
    color: type === "PRIMARY" ? theme.COLORS.GRAY_6 : theme.COLORS.GRAY_2,
  })
)<Props>``;

export const PencilIcon = styled(PencilSimpleLine).attrs<Props>(
  ({ theme, type }) => ({
    size: 18,
    color: type === "PRIMARY" ? theme.COLORS.GRAY_6 : theme.COLORS.GRAY_2,
  })
)<Props>``;

export const TrashIcon = styled(Trash).attrs<Props>(
  ({ theme, type }) => ({
    size: 18,
    color: type === "PRIMARY" ? theme.COLORS.GRAY_6 : theme.COLORS.GRAY_2,
  })
)<Props>``;


  
  