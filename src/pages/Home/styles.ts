import styled from 'styled-components'

export const HomeContainer = styled.main`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5.6rem;
  }
`

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  /* Quebra a linha ao atingir o limite da viewport */
  flex-wrap: wrap;
`

export const CountDownContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.6rem;

  font-size: 16rem;
  font-weight: bold;
  line-height: 12rem;
  font-family: 'Roboto Mono', monospace;
  color: ${(props) => props.theme.gray7};

  span {
    background: ${(props) => props.theme.gray3};
    padding: 2rem 1rem;
    border-radius: 0.8rem;
  }
`
export const Separetor = styled.div`
  color: ${(props) => props.theme.greenDark};
  background: ${(props) => props.theme.gray2};
  overflow: hidden;

  display: flex;
  justify-content: center;
`
