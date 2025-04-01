import styled from "styled-components";

export const Container = styled.div`
height: 100vh;
width: 100%;

display: grid;
grid-template-rows: 70px auto;
grid-template-areas: "header" "content";
`

export const Form = styled.form`
max-width: 550px;
margin: 38px auto;

> h1{
  font-size: 32px;
  color: ${({theme}) => theme.COLORS.BLUE_300};

  margin-bottom: 8px;
}

`