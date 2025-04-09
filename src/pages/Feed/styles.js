import styled from "styled-components";

export const Container = styled.section`
  display: grid;
  grid-template-rows: 70px auto;
  grid-template-areas: "header" "content";
  height: 100vh;
  overflow: hidden;

  .main {
    width: 100%;
    max-width: 1200px;
    height: 100vh;
    margin: auto;
    overflow-y: auto;

    .filters {
      padding: 16px 0;
      display: flex;
      flex-wrap: wrap;
      width: 100%;

      > h2 {
        font-family: "Roboto", sans-serif;
        font-size: 24px;
        font-weight: 400;
        color: ${({ theme }) => theme.COLORS.BLUE_300};
        padding: 4px 0 8px 0;
      }

      > .tags{
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        margin: 0 1rem;
        gap: 6px 0;
      }
    }
  }
`;

export const Content = styled.section`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); // Responsivo com CSS Grid
  padding: 1rem;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, minmax(300px, 1fr)); // Duas colunas
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(1, minmax(300px, 1fr)); // Uma coluna
  }
`;
