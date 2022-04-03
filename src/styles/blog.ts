import { Theme } from '@mui/material'

export default (theme: Theme) => ({
  paper: {
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.secondary,
    padding: theme.spacing(1, 2),
    marginBottom: 16,

    '&:hover': {
      cursor: 'pointer',
      transform: 'scale(1.05)',

      transition: 'transform 0.3s ease-in-out',
    },
    '& a': {
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline',
      },
    },
  },
})
