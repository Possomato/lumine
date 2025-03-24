import styled from "styled-components";

export const Container = styled.section`

.main{
  width: 90vw;
  max-width: 1200px;
  height: 100vh;

  margin: auto;
}

h2{
    font-family: "Roboto", sans-serif;
    font-size: 24px;
    font-weight: 300;

    color: ${({theme}) => theme.COLORS.BLUE_300};

    padding: 4px 0 8px 0;
  }

.filters{
  padding: 16px 0;
}

.tags{
  display: flex;
  gap: 8px;

  width: 100%;
  height: 100%;
}

`

export const Filters = styled.div`

`