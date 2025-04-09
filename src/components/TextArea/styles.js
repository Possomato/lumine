import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 250px;

  background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
  color: ${({theme}) => theme.COLORS.WHITE};;

  border: none;
  resize: none;

  border-radius: 6px;
  padding: 8px;

  font-family: 'Roboto', sans-serif;

  margin-top: 8px;

  white-space: pre-wrap;
  overflow-wrap: break-word; 

  &::placeholder{
    color: ${({theme}) => theme.COLORS.GRAY_100}
  }

  &:focus {
    outline: none; 
    box-shadow: none; 
    border: none; 
  }
`