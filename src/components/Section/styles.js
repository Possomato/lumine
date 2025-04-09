import styled from "styled-components";

export const Container = styled.section`
  margin: 24px 0px;

  >h2{
    color: ${({theme}) => theme.COLORS.WHITE};


    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({theme}) => theme.COLORS.WHITE};

    opacity: .5;

    padding-bottom: 8px;
    margin-bottom: 12px;
    font-size: 20px;
    font-family: "Libre Baskerville", serif;
  }

  >ul{
    list-style-type: none;
    padding-left: 0; 
  }

  > li, a{
    color: ${({theme}) => theme.COLORS.WHITE};
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    display: inline-block; 
    white-space: nowrap; 
    overflow: hidden; 
    text-overflow: ellipsis; 
    max-width: 100%; 
    text-decoration: underline;

    &:hover{
    color: ${({theme}) => theme.COLORS.BLUE_300};
  }
  }

`