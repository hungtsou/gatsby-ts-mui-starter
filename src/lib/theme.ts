import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import { indigo, purple } from '@material-ui/core/colors'

export const breakpoints = {
  lg: '1200px',
  md: '960px',
  sm: '768px'
}

export const colorPalette = {
  primary: {
    dark: indigo[700],
    light: indigo[300],
    main: indigo[500]
  },
  secondary: {
    dark: purple[700],
    light: purple[300],
    main: purple[500]
  }
}

const theme = createMuiTheme({
  palette: colorPalette
})

export default theme
