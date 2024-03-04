// Styles
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/defaultTheme'
import { GlobalStyles } from './styles/globa'

// Rotas
import { BrowserRouter } from 'react-router-dom'
import Router from './Router'

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyles />
    </ThemeProvider>
  )
}
