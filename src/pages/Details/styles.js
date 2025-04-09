import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 70px auto;
  grid-template-areas: "header" "content";

  > main {
    grid-area: content;
    overflow-y: scroll;
    padding: 32px 0;
  }
`

export const Content = styled.div`
  max-width: 550px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  > h1{
    font-size: 24px;
    font-family: "Libre Baskerville", serif;

    color: ${({theme}) => theme.COLORS.BLUE_300};

    margin-bottom: 4px;
  }

  > span{
    font-size: 12px;
    font-family: "Roboto", sans-serif;

    color: ${({theme}) => theme.COLORS.GRAY_100};

    margin-bottom: 16px;
  }

  > p{
    height: 100%;
    width: 100%;

    font-size: 16px;
    font-family: "Roboto", sans-serif;
    text-align: justify;
    white-space: pre-wrap;
    overflow-wrap: break-word;
  }
`