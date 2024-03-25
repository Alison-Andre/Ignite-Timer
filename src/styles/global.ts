import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 10px;

  // Pré fixos para melhorar a vizualização de textos
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
}

body, input, textarea, button {
  font-size: 1.6rem;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-style: normal;
  
  color: ${(props) => props.theme.gray3};
  background: ${(props) => props.theme.gray1};
}

`
