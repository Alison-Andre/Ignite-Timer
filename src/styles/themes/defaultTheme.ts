// Tipagem
interface Theme {
  green: string
  greenLight: string
  greenDark: string
  red: string
  redDark: string
  gray1: string
  gray2: string
  gray3: string
  gray4: string
  gray5: string
  gray6: string
  gray7: string
  white: string
}

// Objeto com as definições de tema
export const defaultTheme: Theme = {
  green: '#00875F',
  greenLight: '#00B37E',
  greenDark: '#015F43',

  red: '#F03847',
  redDark: '#8B0000',

  gray1: '#121214',
  gray2: '#202024',
  gray3: '#323238',
  gray4: '#7C7C8A',
  gray5: '#8D8D99',
  gray6: '#C4C4CC',
  gray7: 'E1E1E6',
  white: '#FFFFFF',
}
