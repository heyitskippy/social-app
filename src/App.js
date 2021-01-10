import React from 'react'
import 'fontsource-roboto'
import './App.scss'

import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Link from '@material-ui/core/Link'

import { ThemeProvider } from '@material-ui/core/styles'
import { createMuiTheme } from '@material-ui/core/styles'
import { makeStyles } from '@material-ui/core/styles'

import MyHeader from './components/MyHeader'
import MyGrid from './components/MyGrid'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'© '}
      <Link color="inherit" href="https://github.com/heyitskippy">
        heyitskippy
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

const useStyles = makeStyles((theme) => ({
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}))

const muiTheme = createMuiTheme({
  palette: {
    type: 'dark',
  },
})

export default function App() {
  const classes = useStyles()

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <MyHeader />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <MyGrid />
          <Box component="footer" pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </ThemeProvider>
  )
}
