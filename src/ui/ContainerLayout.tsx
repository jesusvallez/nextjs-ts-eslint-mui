import { ComponentProps, RefObject, ElementType } from 'react'

import { Box, Container } from '@mui/material'

import { WithChildren, WithSXs } from '../helpers/react'

interface Props {
  id?: string
  maxWidth?: ComponentProps<typeof Container>['maxWidth']
  elementRef?: RefObject<HTMLDivElement>
  component?: ElementType
}

const ContainerLayout = ({
  id,
  maxWidth,
  component = 'article',
  elementRef,
  children,
  sxs,
  ...rest
}: WithSXs<WithChildren<Props>>) => {
  return (
    // rest hack to fade in https://codesandbox.io/s/material-ui-fade-56gpi?file=/src/index.js
    <Box
      id={id}
      component={component}
      ref={elementRef}
      sx={{
        pt: {
          xs: 2,
          sm: 2,
        },
        pb: {
          xs: 2,
          sm: 2,
        },
        px: 0,
        ...sxs?.root,
      }}
      {...rest}
    >
      <Container maxWidth={maxWidth} sx={sxs?.container}>
        {children}
      </Container>
    </Box>
  )
}

export default ContainerLayout
