import { ReactElement } from 'react'

import { Box, Container, SvgIcon, Typography } from '@mui/material'

import useGlobalContext from '@/context/useGlobalContext'

import { ReactComponent as ShapeSVG } from '../assets/shape.svg'

const Banner = (): ReactElement => {
  const { dataStoraged, setDataToStorage } = useGlobalContext()

  return (
    <>
      <Box
        component="section"
        minHeight="700px"
        display="flex"
        alignItems="center"
        position="relative"
        bgcolor="primary.main"
      >
        <Container>
          <Typography
            component="h1"
            variant="h2"
            fontWeight={700}
            letterSpacing={-2.5}
            unselectable="on"
            color="primary.contrastText"
            onClick={() => {
              setDataToStorage({ footer: 'Title Clicked', enable: false })
            }}
            gutterBottom
          >
            Lorem ipsum dolor sit.
          </Typography>
          <Typography
            component="h2"
            variant="h6"
            fontWeight={700}
            unselectable="on"
            lineHeight={1.2}
            color="primary.contrastText"
            onClick={() => {
              setDataToStorage({ footer: 'Subtitle Clicked', enable: true })
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis fugiat vel fuga, harum
            voluptatibus nostrum delectus, inventore necessitatibus maxime perferendis,
            exercitationem quos qui dignissimos. Nisi odit sequi corrupti perferendis eum?
          </Typography>
        </Container>
        {dataStoraged?.enable && (
          <SvgIcon
            component={ShapeSVG}
            sx={{
              fill: ({ palette }) => palette.background.default,
              width: '100%',
              height: {
                xs: '40px',
                sm: '60px',
              },
              position: 'absolute',
              bottom: '0',
              transform: 'rotate(180deg) scaleX(-1);',
            }}
          />
        )}
      </Box>
    </>
  )
}

export default Banner
