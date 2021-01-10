import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import MyCard from './MyCard'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}))

const post = (props) => {
  const { content, key } = props
  return (
    <Grid key={key} item xs={12}>
      <MyCard content={content} />
    </Grid>
  )
}

const posts = (number) => {
  let arr = []

  for (let key = 1; key < number + 1; key++) {
    arr.push(post({ key, content: `Content of ${key} post.` }))
  }
  return arr
}

export default function MyGrid() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {posts(10)}
        <Grid item xs={12}>
          <Paper className={classes.paper}>Durov, give back the wall!</Paper>
        </Grid>
      </Grid>
    </div>
  )
}
