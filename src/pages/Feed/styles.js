import styled from "styled-components";

export const Container = styled.section`

.main{
  width: 90vw;
  max-width: 1200px;
  height: 100vh;

  margin: auto;
}



.filters{
  padding: 16px 0;

  > h2{
    font-family: "Roboto", sans-serif;
    font-size: 24px;
    font-weight: 300;

    color: ${({theme}) => theme.COLORS.BLUE_300};

    padding: 4px 0 8px 0;
  }
}

`

export const Content = styled.section`
`