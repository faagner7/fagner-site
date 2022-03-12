import { Theme } from '@mui/material'
import { green, grey, purple } from '@mui/material/colors'

export default (theme: Theme) => ({
  root: {
    height: '8vh',
    backgroundColor: '#0F0F0F',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    display: 'flex',
    width: '100%',
    maxWidth: 1080,
    justifyContent: 'space-between',
    padding: '0 20px',
    color: theme.palette.common.white,
  },
})
