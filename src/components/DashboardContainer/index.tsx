import { ReactChild, ReactElement, ReactFragment, ReactNode } from 'react'
import { makeStyles } from '@mui/styles'
import Header from '../Header'

import styles from './styles'

type Props = {
  children: ReactNode | ReactChild | ReactElement | ReactFragment
}

const useStyles = makeStyles(styles)

const DashboardContainer = ({ children }: Props) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Header />
      <main className={classes.container}>{children}</main>
    </div>
  )
}
export default DashboardContainer
