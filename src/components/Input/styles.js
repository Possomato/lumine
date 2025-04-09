import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  width: 100%;

  border-radius: 6px;

  background-color: ${({white, theme}) => white? theme.COLORS.BLUE_100 : theme.COLORS.BACKGROUND_900};

  > input{
    height: 35px;

    width: 100%;
    padding: 0 8px;
    background: transparent;
    border: none;
    border-radius: 6px;

    color: ${({white, theme}) => white? theme.COLORS.BACKGROUND_900 : theme.COLORS.WHITE};

    &::placeholder{
      color: ${({white, theme}) => white? theme.COLORS.BLUE_300 : theme.COLORS.GRAY_100};
    }

    &:focus {
      outline: none; 
      box-shadow: none; 
      border: none; 
    }
  }

  >svg{
      margin-left: 8px;
      color: ${({theme}) => theme.COLORS.BLUE_400};
    }
`