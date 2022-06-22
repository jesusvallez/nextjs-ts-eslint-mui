import { FunctionComponent, SVGProps } from 'react'

import { Theme, SxProps } from '@mui/material'

import theme from './theme'

export type SxStyles = {
  [key: string]: SxProps<Theme>
}

export type SVGReactComponent = FunctionComponent<SVGProps<SVGSVGElement> & { title?: string }>

export default theme
