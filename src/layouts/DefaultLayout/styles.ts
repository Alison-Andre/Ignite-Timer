import styled from 'styled-components'

export const LayoutConainer = styled.div`
  max-width: 118rem;
  height: calc(100vh - 16rem);

  margin: 8rem 16rem;
  padding: 4rem;

  background: ${(props) => props.theme.gray2};
`
