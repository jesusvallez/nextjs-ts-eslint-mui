import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  Drawer,
  List,
  ListItem,
} from '@mui/material'

import { ElementNav } from '../models'

interface Props {
  archor?: 'left' | 'right'
  isVisible: boolean
  elements?: ElementNav[]
  close: () => void
}

function CustomDrawer({ isVisible, close, archor = 'right', elements = [] }: Props) {
  return (
    <Drawer anchor={archor} open={isVisible} onClose={close}>
      <Box sx={{ width: 250 }} role="presentation" onClick={close} onKeyDown={close}>
        <List>
          {Object.values(elements).map(({ text, icon: Icon, link }) => (
            <ListItem key={text} disablePadding>
              <ListItemButton href={link ?? ''}>
                {Icon && (
                  <ListItemIcon>
                    <Icon />
                  </ListItemIcon>
                )}
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  )
}

export default CustomDrawer
