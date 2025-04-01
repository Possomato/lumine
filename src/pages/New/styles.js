import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;

  display: grid;
  grid-template-rows: 70px auto;
  grid-template-areas: "header" "content";

  > main{
    grid-area: content;
    overflow-y: auto;
  }
`

export const Form = styled.form`
  max-width: 550px;
  margin: 38px auto;

  > h1{
    font-size: 32px;
    color: ${({theme}) => theme.COLORS.BLUE_300};
    font-weight: 200;

    margin-bottom: 8px;
  }

`

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap; /* Permite quebrar a linha */
  justify-content: space-between; /* Espaço entre os itens */
  
  > div {
    flex-basis: calc(50% - 8px); /* Cada item ocupa metade da largura menos o gap */
    margin-bottom: 16px; /* Espaço vertical entre as linhas */
  }
`;
