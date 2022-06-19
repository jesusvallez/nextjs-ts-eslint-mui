import { Components } from '@mui/material/styles/components'

const MuiCssBaseline: Components['MuiCssBaseline'] = {
  styleOverrides: `
    * {
      transition-property: background-color;
      transition-duration: 300ms;
    }

    #__next {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }

    html {
      -webkit-font-smoothing: auto;
    }

    figure {
      margin-block-start: 0;
      margin-block-end: 0;
      margin-inline-start: 0;
      margin-inline-end: 0;
  }
  `,
}

export default MuiCssBaseline
