import styled from "styled-components";

export const Container = styled.section`
  display: grid;
  grid-template-rows: 70px auto;
  grid-template-areas: "header" "content";
  height: 100vh;
  overflow: hidden;

  .main {
  width: 100%;
  max-width: 1200px;
  height: 100vh;
  margin: auto;
  overflow-y: auto;
}



.filters{
  padding: 16px 0;

  > h2{
    font-family: "Roboto", sans-serif;
    font-size: 24px;
    font-weight: 400;

    color: ${({theme}) => theme.COLORS.BLUE_300};

    padding: 4px 0 8px 0;
  }
}

`

export const Content = styled.section`
`