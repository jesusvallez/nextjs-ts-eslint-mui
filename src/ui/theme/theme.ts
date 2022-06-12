import { PaletteMode } from '@mui/material'
import { esES } from '@mui/material/locale'
import { createTheme, ThemeOptions } from '@mui/material/styles'

import breakpoints from './config/breakpoints'
// import palette from './config/palette'
import spacing from './config/spacing'
import MuiAppBar from './overrides/MuiAppBar'
import MuiContainer from './overrides/MuiContainer'
import MuiCssBaseline from './overrides/MuiCssBaseline'
import MuiToolbar from './overrides/MuiToolbar'

const themeOptions = (mode: PaletteMode): ThemeOptions => ({
  // palette: palette(mode),
  palette: {
    mode,
    primary: {
      main: '#00adb5',
      contrastText: '#1a202c',
    },
    background: {
      default: mode === 'dark' ? '#121212' : '#f0e7db',
    },
    action: {
      active: mode === 'dark' ? '#eee' : '#1a202c',
    },
  },
  breakpoints,
  spacing,
  components: {
    MuiAppBar: MuiAppBar(mode),
    MuiContainer,
    MuiCssBaseline,
    MuiToolbar,
  },
})

// Create a theme instance.
const theme = (mode: PaletteMode = 'light') => createTheme(themeOptions(mode), esES)

export default theme
