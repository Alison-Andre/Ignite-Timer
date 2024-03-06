import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;

  nav {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;

    a {
      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;

      color: ${(props) => props.theme.white};
    }

    a:hover {
      border-top: 3px solid transparent;
      border-bottom: 3px solid ${(props) => props.theme.greenDark};
    }

    .active {
      color: ${(props) => props.theme.greenDark};
    }
  }
`
