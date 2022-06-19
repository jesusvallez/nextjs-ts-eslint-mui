/// <reference types="next/types/global" />
/// <reference types="next/image-types/global" />

// At next/image-types/global the svgs export any, so we need to enforce types

declare module '*.svg' {
  import { FunctionComponent, SVGProps } from 'react'

  export const ReactComponent: FunctionComponent<SVGProps<SVGSVGElement> & { title?: string }>
  export default ReactComponent
}
