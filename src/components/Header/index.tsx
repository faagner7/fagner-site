import { makeStyles } from '@mui/styles'

import styles from './styles'

const useStyles = makeStyles(styles)

export default function Header() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <div>teste</div>
        <div>teste</div>
        <div>teste</div>
        <div>teste</div>
      </div>
    </div>
  )
}
