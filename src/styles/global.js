import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0; 
    box-sizing: border-box; 
  }

  body{
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
    color: ${({theme}) => theme.COLORS.WHITE};
  }

  a {
    text-decoration: none;
  }

  a, button {
    cursor: pointer;
    transition: filter 0.2s;
  }

  a:hover, button:hover {
    filter: brightness(0.9)
  }

  .buttons{ 
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 48px;
  }

  .tags{
  display: flex;
  gap: 5px;

  width: 100%;
  height: 100%;
}
`