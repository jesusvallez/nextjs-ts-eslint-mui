import { experimental_sx as sx, Components } from '@mui/material'

const MuiToolbar: Components['MuiToolbar'] = {
  styleOverrides: {
    root: sx({
      px: {
        xs: 0,
        sm: 0,
      },
    }),
  },
}

export default MuiToolbar
