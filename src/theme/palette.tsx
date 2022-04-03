const darkPalette = {
  background: {
    default: '#1D1D1D',
    paper: '#FFFFFF',
  },
  text: {
    primary: '#FFFFFF',
    secondary: '#1D1D1D',
  },
}

const lightPalette = {
  background: {
    default: '#FFFFFF',
    paper: '#1D1D1D',
  },
  text: {
    primary: '#1D1D1D',
    secondary: '#FFFFFF',
  },
}

export const palette = (type: String) =>
  type === 'dark' ? darkPalette : lightPalette
