import { Theme } from '@mui/material'

export default (theme: Theme) => ({
  root: {
    width: '100%',
    height: '60px',
    backgroundColor: '#0F0F0F',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'fixed' as 'fixed',
    top: 0,
    left: 0,
  },
  container: {
    display: 'flex',
    width: '100%',
    maxWidth: '1080px',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 20px',
    color: theme.palette.common.white,
  },
})
