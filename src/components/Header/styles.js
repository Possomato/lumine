import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 70px;
  padding: 0 32px;

  background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};

  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-family: "Libre Baskerville", serif;
    font-size: 40px; 

    color: ${({ theme }) => theme.COLORS.BLUE_300};
  }
`

export const Profile = styled.button`
  height: 40px;
  width: 40px;

  border: none;
  background: none;

  img{
    height: 100%;
    width: 100%;

    color: ${({theme}) => theme.COLORS.BLUE_300};
  }
`