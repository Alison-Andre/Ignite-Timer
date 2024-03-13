import styled from 'styled-components'

export const HistoryContainer = styled.div`
  flex: 1;
  padding: 5rem;

  h1 {
    color: ${(props) => props.theme.white};
    font-size: 2.4rem;
    font-weight: bold;
  }
`

export const HistoryList = styled.div`
  flex: 1;
  overflow: auto;

  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;
  }
`
