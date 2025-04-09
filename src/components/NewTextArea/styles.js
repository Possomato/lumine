import styled from "styled-components";

export const DisplayContainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 6px;
  padding: 16px;
  font-family: 'Roboto', sans-serif;
  line-height: 1.6; /* Ajusta o espaçamento entre linhas */
  
  white-space: pre-wrap; /* Preserva as quebras de linha */
  overflow-wrap: break-word; /* Garante que palavras longas sejam quebradas */
`;

export const InputContainer = styled.textarea`
  width: 100%;
  height: 250px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  color: ${({ theme }) => theme.COLORS.WHITE};
  border: none;
  resize: none;
  border-radius: 6px;
  padding: 8px;
  
  font-family: 'Roboto', sans-serif;
  
  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  &:focus {
    outline: none;
    box-shadow: none;
    border: none;
  }
`;
