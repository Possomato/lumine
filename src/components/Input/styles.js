import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  width: 100%;

  border-radius: 6px;

  background-color: ${({theme}) => theme.COLORS.BLUE_100};

  > input{
    height: 35px;

    width: 100%;
    padding: 0 8px;
    background: transparent;
    border: none;
    border-radius: 6px;

    &::placeholder{
      color: ${({ theme }) => theme.COLORS.BLUE_300};
    }
  }

  >svg{
      margin-left: 8px;
      color: ${({theme}) => theme.COLORS.BLUE_400};
    }
`