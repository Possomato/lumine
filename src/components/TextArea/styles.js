import styled from "styled-components";

export const Container = styled.textarea`
width: 100%;
height: 250px;

background-color: ${({theme}) => theme.COLORS.BLUE_100};

border: none;
resize: none;

border-radius: 6px;
padding: 8px;

font-family: 'Roboto', sans-serif;

margin-top: 8px;

&::placeholder{
      color: ${({theme}) => theme.COLORS.BLUE_300}
    }
`