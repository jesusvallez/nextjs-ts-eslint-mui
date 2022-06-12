import { PaletteMode, PaletteOptions } from '@mui/material'

const primary: PaletteOptions['primary'] = {
  main: '#cc0000',
  light: '#ff7676',
  dark: '#720000',
  contrastText: '#fff',
}

const secondary: PaletteOptions['secondary'] = {
  main: '#4a90e2',
  light: '#7cb7fb',
  dark: '#1054a4',
  contrastText: '#fff',
}

const warning: PaletteOptions['warning'] = {
  main: '#ff9c05',
  light: '#ffcd4a',
  dark: '#c66d00',
  contrastText: '#fff',
}

const error: PaletteOptions['error'] = {
  main: '#e80100',
  light: '#ff6f4b',
  dark: '#c30000',
  contrastText: '#fff',
}

const success: PaletteOptions['success'] = {
  main: '#4ae282',
  light: '#74ffa7',
  dark: '#1e9a4b',
  contrastText: '#fff',
}

const blur: PaletteOptions['blur'] = {
  ...primary,
  contrastText: '#000',
}

const info: PaletteOptions['info'] = {
  ...primary,
}

const grey: PaletteOptions['grey'] = {
  50: '#f5f5f5',
  100: '#e9e9e9',
  200: '#d9d9d9',
  300: '#c4c4c4',
  400: '#9d9d9d',
  600: '#555555',
  700: '#434343',
  800: '#262626',
  900: '#20191b',
}

const text: PaletteOptions['text'] = {
  primary: grey[900],
  secondary: grey[700],
  hint: grey[400],
  disabled: `${grey[900]}66`,
}

const colors: PaletteOptions['colors'] = {
  link: {
    300: primary.light,
    400: primary.main,
    500: primary.dark,
  },
  energy: {
    400: '#358700',
  },
  chip: {
    400: '#c8ddf6',
  },
}

const palette = (mode: PaletteMode): PaletteOptions => ({
  mode: 'light',
  primary,
  secondary,
  warning,
  success,
  info,
  blur,
  error,
  text,
  grey,
  background: {
    default: mode === 'dark' ? '#000' : '#fff',
  },
  colors,
  common: {
    black: grey['900'],
    white: '#fff',
  },
})

export default palette
