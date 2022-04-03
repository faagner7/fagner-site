import { createTheme } from '@mui/material'

import { palette } from './palette'

const ThemeSelector = (type: String) => {
  return createTheme({
    palette: palette(type),
    typography: {
      fontFamily: '"Poppins", sans-serif',
    },
  })
}

export { ThemeSelector }
