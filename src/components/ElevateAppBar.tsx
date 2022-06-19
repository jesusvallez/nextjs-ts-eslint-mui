import { ComponentProps, useState, MouseEvent } from 'react'

import MenuIcon from '@mui/icons-material/Menu'
import {
  AppBar,
  Container,
  Divider,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  useScrollTrigger,
} from '@mui/material'

const ITEM_HEIGHT = 48

interface Props {
  text: string
  color?: ComponentProps<typeof AppBar>['color']
  minHeight?: string
  position?: ComponentProps<typeof AppBar>['position']
  threshold?: number
}

const ElevateAppBar = ({
  text,
  color = 'primary',
  minHeight = '90px',
  position = 'fixed',
  threshold = 20,
}: Props) => {
  const [anchorEl, setAnchorEl] = useState<null | SVGSVGElement>(null)
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold,
    target: globalThis.window,
  })

  const open = Boolean(anchorEl)
  const handleClick = (event: MouseEvent<SVGSVGElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <AppBar
      elevation={trigger ? 4 : 0}
      position={position}
      color={color}
      sx={{ minHeight, justifyContent: 'center' }}
    >
      <Container>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography noWrap variant="h4" fontWeight={700} letterSpacing={-2}>
            {text.toUpperCase()}
          </Typography>
          <MenuIcon
            aria-label="more"
            id="long-button"
            aria-controls={open ? 'long-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            aria-haspopup="true"
            onClick={handleClick}
          />
          <Menu
            id="long-menu"
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            MenuListProps={{ 'aria-labelledby': 'long-button' }}
            sx={{ mt: 4 }}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <MenuItem>Profile</MenuItem>
            <MenuItem>My account</MenuItem>
            <Divider />
            <MenuItem>Add another account</MenuItem>
            <MenuItem>Settings</MenuItem>
            <MenuItem>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default ElevateAppBar
