import { experimental_sx as sx, Components } from '@mui/material'

const MuiContainer: Components['MuiContainer'] = {
  defaultProps: {
    maxWidth: 'lg',
  },
  styleOverrides: {
    root: sx({
      px: {
        xs: 4,
        sm: 4,
      },
    }),
  },
}

export default MuiContainer
