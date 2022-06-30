import { ComponentProps } from 'react'

import MenuIcon from '@mui/icons-material/Menu'
import {
  AppBar,
  Box,
  Container,
  IconButton,
  Toolbar,
  Typography,
  useScrollTrigger,
} from '@mui/material'

import { ElementNav } from '@/context/useGlobalContext/useGlobalContext'
import { SxStyles } from '@/ui/theme'

export const classes: SxStyles = {
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
}

interface Props {
  text: string
  elements?: ElementNav[]
  color?: ComponentProps<typeof AppBar>['color']
  matches?: boolean
  minHeight?: string
  position?: ComponentProps<typeof AppBar>['position']
  threshold?: number
  moreDetails?: () => void
}

const ElevateAppBar = ({
  text,
  matches = false,
  elements = [],
  color = 'primary',
  minHeight = '90px',
  position = 'fixed',
  threshold = 20,
  moreDetails,
}: Props) => {
  const { title, links } = classes
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

          {elements.length > 0 && matches ? (
            <Box display="flex" gap={6} component="ul" sx={{ listStyleType: 'none' }}>
              {elements.map(({ text, link }) => (
                <Box key={text} component="li">
                  <Typography
                    component="a"
                    letterSpacing={'-1px'}
                    fontWeight="bold"
                    sx={links}
                    onClick={() => {
                      if (link && link.current) {
                        globalThis.scrollTo({ top: link.current.offsetTop, behavior: 'smooth' })
                      }
                    }}
                  >
                    {text}
                  </Typography>
                </Box>
              ))}
            </Box>
          ) : (
            <IconButton aria-label="more" sx={{ color: 'white' }} onClick={moreDetails}>
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default ElevateAppBar
