import { Components } from '@mui/material/styles/components'

import breakpoints from '../config/breakpoints'

const MuiToolbar: Components['MuiToolbar'] = {
  styleOverrides: {
    root: {
      paddingLeft: 0,
      paddingRight: 0,

      [breakpoints.up('sm')]: {
        paddingLeft: 0,
        paddingRight: 0,
      },
    },
  },
}

export default MuiToolbar
