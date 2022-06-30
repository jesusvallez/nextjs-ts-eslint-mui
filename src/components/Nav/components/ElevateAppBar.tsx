import { ComponentProps } from 'react'

import MenuIcon from '@mui/icons-material/Menu'
import {
  AppBar,
  Box,
  Breakpoint,
  Container,
  IconButton,
  Toolbar,
  Typography,
  useScrollTrigger,
} from '@mui/material'

import { ElementNav } from '@/context/useGlobalContext/useGlobalContext'
import { SxStyles } from '@/ui/theme'

interface ClassProp {
  breakpoint: Breakpoint
}

export const classes = ({ breakpoint }: ClassProp): SxStyles => ({
  title: {
    cursor: 'pointer',
    fontWeight: 700,
    fontFamily: "'Roboto Condensed', sans-serif",
    letterSpacing: -2,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  links: ({ snippets }) => ({
    ...snippets?.links,
    whiteSpace: 'wrap',
    verticalAlign: 'unset',
    cursor: 'pointer',
  }),
  menuItems: {
    display: {
      xs: 'none',
      [breakpoint]: 'flex',
    },
    gap: 6,
    listStyleType: 'none',
  },
  menuButton: {
    display: {
      xs: 'block',
      [breakpoint]: 'none',
    },
    color: 'white',
  },
})

interface Props {
  text: string
  elements?: ElementNav[]
  color?: ComponentProps<typeof AppBar>['color']
  breakpoint?: Breakpoint
  minHeight?: string
  position?: ComponentProps<typeof AppBar>['position']
  threshold?: number
  moreDetails?: () => void
}

const ElevateAppBar = ({
  text,
  breakpoint = 'md',
  elements = [],
  color = 'primary',
  minHeight = '90px',
  position = 'fixed',
  threshold = 20,
  moreDetails,
}: Props) => {
  const { title, links, menuItems, menuButton } = classes({ breakpoint })
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold,
    target: globalThis.window,
  })

  return (
    <AppBar
      elevation={trigger ? 4 : 0}
      position={position}
      color={color}
      sx={{ minHeight, justifyContent: 'center' }}
    >
      <Container>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography
            variant="h4"
            sx={title}
            onClick={() => {
              globalThis.scrollTo({ top: 0, behavior: 'smooth' })
            }}
          >
            {text.toUpperCase()}
          </Typography>

          {elements.length > 0 && (
            <>
              <Box component="ul" sx={menuItems}>
                {elements.map((e) => (
                  <Box key={e.text} component="li">
                    <Typography
                      component="a"
                      letterSpacing={'-1px'}
                      fontWeight="bold"
                      sx={links}
                      onClick={() => {
                        if (e.link && e.link.current) {
                          globalThis.scrollTo({ top: e.link.current.offsetTop, behavior: 'smooth' })
                        }
                      }}
                    >
                      {e.text}
                    </Typography>
                  </Box>
                ))}
              </Box>
              <IconButton aria-label="more" sx={menuButton} onClick={moreDetails}>
                <MenuIcon />
              </IconButton>
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default ElevateAppBar
