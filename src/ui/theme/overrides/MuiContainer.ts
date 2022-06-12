import { Components } from '@mui/material/styles/components'

import breakpoints from '../config/breakpoints'
import spacing from '../config/spacing'

const MuiContainer: Components['MuiContainer'] = {
  defaultProps: {
    maxWidth: 'lg',
  },
  styleOverrides: {
    root: {
      paddingLeft: spacing(2),
      paddingRight: spacing(2),

      [breakpoints.up('sm')]: {
        paddingLeft: spacing(4),
        paddingRight: spacing(4),
      },
    },
  },
}

export default MuiContainer
