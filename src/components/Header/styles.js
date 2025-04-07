import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
  width: 100%;
  height: 70px;
  padding: 0 32px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative; /* Adicionado para permitir centralização absoluta */

  .funcionalidades {
    display: flex;
    flex-direction: row;
    gap: 16px;

    position: absolute; /* Centraliza em relação ao Container */
    left: 50%; /* Move para o centro horizontal */
    transform: translateX(-50%); /* Ajusta para alinhar exatamente no centro */
  }
`;

export const Profile = styled(Link)`
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

export const Search = styled.div`
  max-width: 600px;
  width: 40vw;
`

export const Button = styled(Link)`
  height: 35px;

  padding: 0 8px;

  border: none;
  border-radius: 6px;

  max-width: 90px;
  width: 10vw;
  background-color: ${({theme}) => theme.COLORS.BLUE_400};
  color: ${({theme}) => theme.COLORS.WHITE};

  display: flex;
  align-items: center;
  justify-content: center;

  font-family: 'Roboto', sans-serif;
  font-size: 14px;
`

export const Logo = styled(Link)`
  font-family: "Libre Baskerville", serif;
  font-size: clamp(1.75em, 1em + 2vw, 2.5em);

  color: ${({ theme }) => theme.COLORS.BLUE_300};
`