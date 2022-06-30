import { PaletteMode, Components } from '@mui/material'

const MuiAppBar = (mode: PaletteMode): Components['MuiAppBar'] => ({
  styleOverrides: {
    root: {
      // transitionProperty: 'box-shadow',
      transitionProperty: 'background-color, box-shadow',
    },
    colorTransparent: {
      backdropFilter: 'blur(10px)',
      backgroundImage: 'none',
      backgroundColor: mode === 'dark' ? 'rgba(0, 0, 0, 0.10)' : 'rgba(255, 255, 255, 0.30)',
    },
  },
})

export default MuiAppBar
