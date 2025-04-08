import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;

  display: grid;
  grid-template-rows: 70px auto;
  grid-template-areas: "header" "content";

  > main{
    grid-area: content;
    min-width: 250px;
    width: 30%;
    margin: 38px auto;

    > h1{
    font-size: 32px;
    color: ${({theme}) => theme.COLORS.BLUE_300};
    font-weight: 200;

    margin-bottom: 16px;
  }

  > .inputs{
    margin-bottom: 16px;

    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  }
`
export const Button = styled.button`
  height: 35px;
  width: 100%;

  padding: 0 8px;
  margin-bottom: 8px;

  border: none;
  border-radius: 6px;

  background-color: ${({theme}) => theme.COLORS.BLUE_400};
  color: ${({theme}) => theme.COLORS.WHITE};

  font-family: 'Roboto', sans-serif;
  font-size: 14px;
`

export const ButtonSignOut = styled.button`
  height: 35px;
  width: 100%;

  padding: 0 8px;

  border: none;
  border-radius: 6px;

  background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
  color: ${({theme}) => theme.COLORS.RED};

  font-family: 'Roboto', sans-serif;
  font-size: 14px;
`