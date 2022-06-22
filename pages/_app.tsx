import { AppProps } from 'next/app'
import Head from 'next/head'

import { EmotionCache } from '@emotion/react'
import NextNProgress from 'nextjs-progressbar'

import { Box, useTheme } from '@mui/material'

import { Copyright } from '@/components'
import { Nav } from '@/components/Nav'
import { SeoContainer } from '@/seo'
import { ThemeLayout } from '@/ui'
import { createEmotionCache } from '@/utils'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

function MyApp({ Component, pageProps, emotionCache = clientSideEmotionCache }: MyAppProps) {
  const theme = useTheme()

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <SeoContainer>
        <NextNProgress
          height={3}
          color={theme?.palette?.primary?.main}
          startPosition={0.3}
          stopDelayMs={200}
          showOnShallow={false}
          options={{ showSpinner: false }}
        />
        <ThemeLayout emotionCache={emotionCache}>
          <Nav />
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
