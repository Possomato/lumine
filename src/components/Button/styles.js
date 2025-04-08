import styled from "styled-components";

export const Container = styled.button`
  background-color: ${({ $excluir, theme }) =>
    $excluir ? theme.COLORS.GRAY_300 : theme.COLORS.BLUE_400};
  color: ${({theme}) => theme.COLORS.WHITE};

  width: 80px;
  height: 25px;

  border: 0;
  padding: 0 16px;
  margin-top: 16px;
  border-radius: 5px;

  cursor: pointer;

  font-family: "Roboto", sans-serif;
  font-weight: 500;

  &:disabled{
    opacity: 0.5;
  }
`