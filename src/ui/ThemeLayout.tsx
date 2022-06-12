import { ReactElement } from 'react'

import { EmotionCache } from '@emotion/cache'
import { CacheProvider } from '@emotion/react'

import { CssBaseline, ThemeProvider } from '@mui/material'

import theme from './theme'

import { WithChildren } from '../helpers/react'

enum ColorMode {
  Light = 'light',
  Dark = 'dark',
}

interface ThemeLayoutProps {
  emotionCache: EmotionCache
}

const ThemeLayout = ({ emotionCache, children }: WithChildren<ThemeLayoutProps>): ReactElement => {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme(ColorMode.Dark)}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  )
}

export default ThemeLayout
