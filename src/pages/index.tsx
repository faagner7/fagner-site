import { makeStyles } from '@mui/styles'
import type { NextPage } from 'next'
// import { client, ssrCache } from '../lib/urql'

import { Theme } from '@mui/material'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.palette.common.white,
  },
}))

const Home: NextPage = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div>
        <h2>Fagner Blog</h2>
      </div>
    </div>
  )
}

export default Home
