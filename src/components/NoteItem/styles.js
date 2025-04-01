import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: ${({theme, isNew}) => isNew ? "transparent" : theme.COLORS.BACKGROUND_900};
  color: ${({theme}) => theme.COLORS.GRAY_300};

  border: ${({theme, isNew}) => isNew ? `1px dashed ${theme.COLORS.GRAY_300}` : 'none'};

  margin-bottom: 8px;
  border-radius: 6px;
  padding-right: 16px;

  >button{
    border: none;
    background: transparent
  }

  >.button-delete{
    color: ${({theme}) => theme.COLORS.RED};
    display:flex;
    align-items: center;
    justify-content: center;
  }

  >.button-add{
    color: ${({theme}) => theme.COLORS.BLUE_300};
    display:flex;
    align-items: center;
    justify-content: center;
  }

  >input{
    height: 35px;
    width: 100%;

    padding: 12px;

    color: ${({theme}) => theme.COLORS.WHITE};
    background: transparent;
    border: none;

    &::placeholder{
      color: ${({theme}) => theme.COLORS.GRAY_300};
    }
  }
`