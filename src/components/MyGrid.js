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

export default function CenteredGrid() {
  const classes = useStyles()

  // var rows = [];
  // for (var i = 0; i < numrows; i++) {
  //   // note: we are adding a key prop here to allow react to uniquely identify each
  //   // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
  //   rows.push(<ObjectRow key={i} />);
  // }
  // return <tbody>{rows}</tbody>;

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <MyCard />
        </Grid>
        <Grid item xs={3}>
          <MyCard />
        </Grid>
        <Grid item xs={3}>
          <MyCard />
        </Grid>
        <Grid item xs={3}>
          <MyCard />
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>String</Paper>
        </Grid>
      </Grid>
    </div>
  )
}
