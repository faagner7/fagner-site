import { Provider } from 'urql'
import Head from 'next/head'
import { ThemeProvider, CssBaseline } from '@mui/material'

import type { AppProps } from 'next/app'
import { client, ssrCache } from '../lib/urql'
import { ThemeSelector } from '../theme'
import DashboardContainer from '../components/DashboardContainer'
import { ThemeContext } from '../context/ThemeContext'
import { useState } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  const [colorTheme, setColorTheme] = useState<String>('light')
  // not repeat the same query if the page is cached or is already on server side
  if (pageProps.urqlState) {
    ssrCache.restoreData(pageProps.urqlState)
  }

  return (
    <ThemeContext.Provider
      value={{
        colorTheme,
        setColorTheme,
      }}
    >
      <ThemeProvider theme={ThemeSelector(colorTheme)}>
        <Provider value={client}>
          <Head>
            <meta
              name='viewport'
              content='initial-scale=1, width=device-width'
            />
          </Head>
          <DashboardContainer>
            <Component {...pageProps} />
          </DashboardContainer>
        </Provider>
        <CssBaseline />
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default MyApp
