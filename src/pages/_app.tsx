import { Provider } from 'urql'
import Head from 'next/head'
import { ThemeProvider, CssBaseline } from '@mui/material'

import type { AppProps } from 'next/app'
import { client, ssrCache } from '../lib/urql'
import { theme } from '../theme'
import DashboardContainer from '../components/DashboardContainer'

function MyApp({ Component, pageProps }: AppProps) {
  // not repeat the same query if the page is cached or is already on server side
  if (pageProps.urqlState) {
    ssrCache.restoreData(pageProps.urqlState)
  }

  return (
    <ThemeProvider theme={theme}>
      <Provider value={client}>
        <Head>
          <meta name='viewport' content='initial-scale=1, width=device-width' />
        </Head>
        <DashboardContainer>
          <Component {...pageProps} />
        </DashboardContainer>
      </Provider>
      <CssBaseline />
    </ThemeProvider>
  )
}

export default MyApp
