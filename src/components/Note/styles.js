import styled from "styled-components";

export const Container = styled.button`
  max-width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  border: none;
  border-radius: 5px;
  padding: 16px;
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  
  text-align: left;
  appearance: none;
  cursor: pointer;
  font-family: 'Roboto', sans-serif;
  
  /* Evitar problemas com foco */
  &:focus {
    outline: none;
  }
  
  /* Opcional: destaque sutil ao passar o mouse */
  &:hover {
    filter: brightness(1.05);
  }

  > h2 {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-weight: 500;
    font-size: 22px;
    margin-bottom: 4px;
  }

  > span {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 14px;
    margin-bottom: 8px;
  }

  > p {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 14px;
    line-height: 1.5;
    margin-bottom: 8px;
  }

  footer {
    display: flex;
    gap: 6px 0;
    width: 100%;
    flex-wrap: wrap;

    > span {
      background-color: ${({ theme }) => theme.COLORS.BLUE_300};
      color: ${({ theme }) => theme.COLORS.WHITE};
      padding: 4px 8px;
      border-radius: 5px;
      font-size: 12px;
    }
  }
`;
