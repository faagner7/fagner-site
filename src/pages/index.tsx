import Head from 'next/head'
import { makeStyles } from '@mui/styles'
import type { NextPage } from 'next'
// import { client, ssrCache } from '../lib/urql'

import { Theme } from '@mui/material'
import { useLayoutEffect, useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.secondary,
    marginTop: theme.spacing(4),
    borderRadius: theme.spacing(2),
    padding: theme.spacing(0, 4, 4, 4),
    '& a': {
      color: theme.palette.text.secondary,
    },
  },
}))

const Home: NextPage = () => {
  const classes = useStyles()
  const { setColorTheme } = useContext(ThemeContext)

  useLayoutEffect(() => {
    let defaultTheme = 'light'
    if (
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      defaultTheme = 'dark'
    }
    setColorTheme(defaultTheme)
  }, [setColorTheme])

  return (
    <div className={classes.root}>
      <Head>
        <title>fagner.rodrigues</title>
      </Head>
      <div className={classes.content}>
        <h1>Hello!</h1>
        <p>
          Meu nome é Fagner Rodrigues.
          <br />
          Desenvolvedor front-end desde 2019.
          <br />
          Atualmente atuo como desenvolvedor front-end na{' '}
          <a target='_blank' rel='noreferrer' href='https://hox.rs/'>
            HOX.rs
          </a>
          .
          <br />
          Graduado em Téc. Análise em Desenvolvimento de Sistemas pela
          Universidade Católica de Pelotas (UCPEL) - 2021.
        </p>
      </div>
      <div className={classes.content}>
        <h1>Hello!</h1>
        <p>
          Meu nome é Fagner Rodrigues.
          <br />
          Desenvolvedor front-end desde 2019.
          <br />
          Atualmente atuo como desenvolvedor front-end na{' '}
          <a target='_blank' rel='noreferrer' href='https://hox.rs/'>
            HOX.rs
          </a>
          .
          <br />
          Graduado em Téc. Análise em Desenvolvimento de Sistemas pela
          Universidade Católica de Pelotas (UCPEL) - 2021.
        </p>
      </div>
      <div className={classes.content}>
        <h1>Hello!</h1>
        <p>
          Meu nome é Fagner Rodrigues.
          <br />
          Desenvolvedor front-end desde 2019.
          <br />
          Atualmente atuo como desenvolvedor front-end na{' '}
          <a target='_blank' rel='noreferrer' href='https://hox.rs/'>
            HOX.rs
          </a>
          .
          <br />
          Graduado em Téc. Análise em Desenvolvimento de Sistemas pela
          Universidade Católica de Pelotas (UCPEL) - 2021.
        </p>
      </div>
    </div>
  )
}

export default Home
