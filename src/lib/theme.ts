import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import { blue, grey } from '@material-ui/core/colors'

export const breakpoints = {
  lg: '1200px',
  md: '960px',
  sm: '768px'
}

export const colorPalette = {
  primary: {
    dark: blue[700],
    light: blue[300],
    main: blue[500]
  },
  secondary: {
    dark: grey[700],
    light: grey[300],
    main: grey[500]
  }
}

const theme = createMuiTheme({
  palette: colorPalette
})

export default theme
