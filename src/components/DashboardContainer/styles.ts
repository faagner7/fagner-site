import { Theme } from '@mui/material'

export default (theme: Theme) => ({
  root: {
    height: '100%',
    width: '100%',
    backgroundColor: theme.palette.background.default,
    margin: 0,
    padding: 0,
  },
  container: {
    maxWidth: 1080,
    margin: '0 auto',
  },
})
