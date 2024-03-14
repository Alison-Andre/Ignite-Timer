import styled from 'styled-components'

// Container Pai
export const HistoryContainer = styled.div`
  flex: 1;
  padding: 5rem;

  /* Título */
  h1 {
    color: ${(props) => props.theme.white};
    font-size: 2.4rem;
    font-weight: bold;
  }
`
// Container da tabela
export const HistoryList = styled.div`
  flex: 1;
  overflow: auto;

  // Tabela
  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;
    margin-top: 3.2rem;
  }

  // Conteúdo do Table Head
  th {
    padding: 1.6rem 2.4rem;
    font-size: 1.4rem;
    text-align: left;
    line-height: 160%;
    color: ${(props) => props.theme.white};
    background: ${(props) => props.theme.gray4};

    &:first-child {
      border-top-left-radius: 0.8rem;
    }

    &:last-child {
      border-top-right-radius: 0.8rem;
    }
  }

  // Conteúdo do table body
  td {
    padding: 1.6rem 2.4rem;
    font-size: 1.4rem;
    color: ${(props) => props.theme.gray7};
    background: ${(props) => props.theme.gray3};

    // A cor é a mesma do body para dar o efeito de separamento
    border-top: 4px solid ${(props) => props.theme.gray2};

    &:first-child {
      width: 50%; // Primeiro elemento ocupa 50%
      padding-left: 2.4rem;
    }

    &:last-child {
      padding-left: 2.4rem;
    }
  }
`
