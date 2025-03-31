import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};

  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const Form = styled.form`
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};

  min-width: 320px;
  width: 35%;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 16px;

  border-radius: 6px;

  > h1 {
    color: ${({theme}) => theme.COLORS.BLUE_300};
    font-size: 42px;
    font-weight: 300;

  }

  > p{
    color: ${({theme}) => theme.COLORS.WHITE};

    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 200;
    text-align: center;

    padding-bottom: 24px;

    width: 60%;
  }

  > .inputs{
    display: flex;
    flex-direction: column;

    width: 100%;

    gap: 24px;
  }
`
export const ButtonEnter = styled.button`
  background-color: ${({theme}) => theme.COLORS.BLUE_400};
  color: ${({theme}) => theme.COLORS.WHITE};

  width: 100%;
  height: 35px;
  font-size: 16px;

  border: 0;
  padding: 0 16px;
  margin: 24px 0 8px;
  border-radius: 5px;

  cursor: pointer;

  font-family: "Roboto", sans-serif;
  font-weight: 500;

  &disabled{
    opacity: 0.5;
  }
`