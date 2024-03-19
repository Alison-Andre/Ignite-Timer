import styled from 'styled-components'

// Container
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
    gap: 10rem;
  }
`
// Formulário
export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  /* Quebra a linha ao atingir o limite da viewport */
  flex-wrap: wrap;

  label,
  span {
    font-weight: bold;
    color: ${(props) => props.theme.gray7};
  }
`

// Minutos em tela
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
    cursor: pointer;

    /* Box Shadow CSS Generator */
    -webkit-box-shadow: 4px 4px 5px -4px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 4px 4px 5px -4px rgba(0, 0, 0, 0.75);
    box-shadow: 4px 4px 5px -4px rgba(0, 0, 0, 0.75);
  }
`

// Separador dos minutos
export const Separetor = styled.div`
  color: ${(props) => props.theme.greenDark};
  background: ${(props) => props.theme.gray2};
  overflow: hidden;

  display: flex;
  justify-content: center;
`

// Campos de input
export const BaseInput = styled.input`
  color: ${(props) => props.theme.gray6};
  text-align: center;

  border: transparent;
  border-bottom: 2px solid ${(props) => props.theme.gray5};
  background: transparent;

  &:focus {
    outline: none;
    border-bottom: 1px solid ${(props) => props.theme.greenLight};
  }
`

export const TaskInput = styled(BaseInput)`
  flex: 1;
`

export const MinutesAmount = styled(BaseInput)`
  width: 8rem;
`

// Botão
export const Button = styled.button`
  width: 100%;
  padding: 1.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;

  color: ${(props) => props.theme.gray7};
  background: ${(props) => props.theme.greenDark};
  border: none;
  border-radius: 0.8rem;
  cursor: pointer;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background: ${(props) => props.theme.greenLight};
  }
`
