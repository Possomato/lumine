import styled from "styled-components";

export const Container = styled.button`
  font-size: 12px;
  padding: 5px 14px;
  border-radius: 5px;
  margin-right: 6px;
  background-color: ${({isActive, theme}) => isActive ? theme.COLORS.BLUE_400 : theme.COLORS.BLUE_300};
  color: ${({theme}) => theme.COLORS.WHITE};

  cursor: pointer;
  border: none;

  font-family: Roboto, sans-serif;
`