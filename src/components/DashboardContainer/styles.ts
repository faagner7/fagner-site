import { Theme } from '@mui/material'

export default (theme: Theme) => ({
  root: {
    height: '100%',
    width: '100%',
    backgroundColor: theme.palette.background.default,
    margin: 0,
    padding: 0,
    fontFamily: theme.typography.fontFamily,
  },
  container: {
    maxWidth: 720,
    padding: '70px 20px 30px',
    margin: '0 auto',
  },
})
