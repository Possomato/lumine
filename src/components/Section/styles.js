import styled from "styled-components";

export const Container = styled.section`
  margin: 56px 0 28px;

  >h2{
    color: ${({theme}) => theme.COLORS.WHITE};


    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({theme}) => theme.COLORS.WHITE};

    opacity: .5;

    padding-bottom: 8px;
    margin-bottom: 24px;
    font-size: 20px;
    font-family: "Libre Baskerville", serif;
  }
`