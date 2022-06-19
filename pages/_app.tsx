import { AppProps } from 'next/app'
import Head from 'next/head'

import { EmotionCache } from '@emotion/react'
import NextNProgress from 'nextjs-progressbar'

import { Box } from '@mui/material'

import Copyright from '@/src/components/Copyright'
import ElevateAppBar from '@/src/components/ElevateAppBar'
import SeoContainer from '@/src/seo/SeoContainer'
import theme from '@/src/ui/theme'
import ThemeLayout from '@/src/ui/ThemeLayout'
import createEmotionCache from '@/src/utils/createEmotionCache'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

function MyApp({ Component, pageProps, emotionCache = clientSideEmotionCache }: MyAppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <SeoContainer>
        <NextNProgress
          height={3}
          color={theme()?.palette?.primary?.main}
          startPosition={0.3}
          stopDelayMs={200}
          showOnShallow={false}
          options={{ showSpinner: false }}
        />
        <ThemeLayout emotionCache={emotionCache}>
          <ElevateAppBar text="Lorem ipsum dolor." />
          <Box component="main">
            <Component {...pageProps} />
          </Box>
          <Copyright />
        </ThemeLayout>
      </SeoContainer>
    </>
  )
}

export default MyApp
