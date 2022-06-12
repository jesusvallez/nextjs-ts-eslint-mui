/* eslint-disable @typescript-eslint/no-empty-interface */
import { ColorPartial } from '@mui/material'

import { snippets } from './helpers'

declare type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends Array<infer U>
    ? Array<DeepPartial<U>>
    : T[P] extends ReadonlyArray<infer U>
    ? ReadonlyArray<DeepPartial<U>>
    : DeepPartial<T[P]>
}

declare module '@mui/material/styles/createPalette' {
  interface TypeText {
    hint: string
  }
}

declare module '@mui/material/styles/zIndex' {
  interface ZIndex {
    component: number
    header: number
  }
}

declare module '@mui/material/AppBar' {
  interface AppBarPropsColorOverrides {
    blur: true
  }
}

declare module '@mui/material/styles' {
  interface colors {
    [colorName: string]: ColorPartial
  }

  interface Palette {
    colors: colors
    blur: Palette['primary']
  }

  interface PaletteOptions {
    colors?: colors
    blur?: PaletteOptions['primary']
  }

  interface Theme {
    snippets?: typeof snippets
  }

  interface ThemeOptions extends DeepPartial<Theme> {}
}

declare module '@mui/styles' {
  import { Theme, ThemeOptions } from '@mui/material/styles'

  interface DefaultTheme extends Theme {}
  interface ThemeOptions extends DeepPartial<Theme> {}
}

declare module '@mui/styles/defaultTheme' {
  import { Theme } from '@mui/material/styles'

  interface DefaultTheme extends Theme {}
}

type ExtendedIcon = React.FunctionComponent<
  React.SVGProps<SVGSVGElement> & { title?: string; primary?: string; secondary?: string }
>
