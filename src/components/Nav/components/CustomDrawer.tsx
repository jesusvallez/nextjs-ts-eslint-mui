import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  Drawer,
  List,
  ListItem,
  Typography,
} from '@mui/material'

import { ElementNav } from '@/context/useGlobalContext/useGlobalContext'

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
            <ListItem
              key={text}
              disablePadding
              onClick={() => {
                if (link && link.current) {
                  globalThis.scrollTo({ top: link.current.offsetTop, behavior: 'smooth' })
                }
              }}
            >
              <ListItemButton>
                {Icon && (
                  <ListItemIcon>
                    <Icon />
                  </ListItemIcon>
                )}
                <ListItemText>
                  <Typography key={text} component="a" letterSpacing={'-1px'} fontWeight="bold">
                    {text}
                  </Typography>
                </ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  )
}

export default CustomDrawer
