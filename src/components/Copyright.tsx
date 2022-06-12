import { ReactElement } from 'react'

import { Link as MuiLink, Typography } from '@mui/material'

const Copyright = (): ReactElement => {
  return (
    <Typography variant="body2" color="text.secondary" align="center" sx={{ my: 4 }}>
      {'Copyright © '}
      <MuiLink color="inherit" href="https://jesusvallez.github.io/">
        My awesome Website
      </MuiLink>{' '}
      {new Date().getFullYear()}.
    </Typography>
  )
}

export default Copyright
