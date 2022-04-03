import { createContext } from 'react'

export type ThemeContextType = {
  colorTheme: String
  setColorTheme: (colorTheme: String) => void
}

const ThemeContext = createContext<ThemeContextType>({
  colorTheme: 'light',
  setColorTheme: () => {},
})

export { ThemeContext }
