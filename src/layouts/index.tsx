// This is the main layout component that automatically wraps all pages components
import * as React from 'react'
import { Helmet } from 'react-helmet'
import ThemeProvider from '@material-ui/styles/ThemeProvider'
import theme from '../lib/theme'
import { CssBaseline } from '@material-ui/core'

const Layout: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Helmet>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    </Helmet>
    {children}
  </ThemeProvider>
)

export default Layout
