import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;

  display: grid;
  grid-template-rows: 70px auto;
  grid-template-areas: "header" "content";

  > main{
    grid-area: content;
    min-width: 250px;
    width: 30%;
    margin: 38px auto;

    > h1{
    font-size: 32px;
    color: ${({theme}) => theme.COLORS.BLUE_300};
    font-weight: 200;

    margin-bottom: 16px;
  }

  > .inputs{
    margin-bottom: 16px;

    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  }
`