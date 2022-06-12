import { AppBar, Container, Toolbar, Typography, useScrollTrigger } from '@mui/material'

import { WithSX } from '../helpers/react'

interface Props {
  window?: () => Window
}

const ElevateAppBar = ({ window, sx }: WithSX<Props>) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  })

  return (
    <AppBar elevation={trigger ? 5 : 0} position="sticky" sx={sx}>
      <Container>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h6">Lorem ipsum dolor sit amet consectetur.</Typography>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default ElevateAppBar
