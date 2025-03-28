import styled from "styled-components";

export const Container = styled.button`
width: 300px;
background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};

border: none;
border-radius: 5px;
padding: 16px;
margin-bottom: 16px;

display: flex;
flex-direction: column;
align-items: baseline;

> h2{
  color: ${({theme}) => theme.COLORS.WHITE};

  flex: 1;

  text-align: left;
  font-weight: 500;
  font-size: 22px;

  margin-bottom: 4px;
}

> span{
  color: ${({theme}) => theme.COLORS.GRAY_100};

  width: 100%;

  text-align: left;
  font-weight: 500;
  font-size: 14px;

  margin-bottom: 8px;
}

> p{
  color: ${({theme}) => theme.COLORS.WHITE};

  flex: 1;

  text-align: left;
  font-weight: 500;
  font-size: 16px;

  margin-bottom: 8px;
}

`