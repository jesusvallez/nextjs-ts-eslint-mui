import { ReactElement } from 'react'

import { Link as MuiLink, Typography } from '@mui/material'

import useGlobalContext from '@/context/useGlobalContext'

const Copyright = (): ReactElement => {
  const { dataStoraged } = useGlobalContext()

  return (
    <Typography variant="body2" color="text.secondary" align="center" sx={{ my: 4 }}>
      {'Copyright © '}
      <MuiLink color="inherit" href="https://jesusvallez.github.io/">
        My awesome Website
      </MuiLink>{' '}
      {new Date().getFullYear()}. {dataStoraged.footer}
    </Typography>
  )
}

export default Copyright
