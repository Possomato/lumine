import styled from "styled-components";

export const Container = styled.textarea`
width: 100%;
height: 150px;

background-color: ${({theme}) => theme.COLORS.WHITE};

border: none;
resize: none;

border-radius: 6px;
padding: 8px;

font-family: 'Roboto', sans-serif;


&::placeholder{
      color: ${({theme}) => theme.COLORS.GRAY_300}
    }
`