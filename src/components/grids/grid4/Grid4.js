import { Grid } from '@material-ui/core'
import React from 'react'
import Card4 from '../../card/card4/Card4'

const Grid4 = () => {
  return (
    <Grid container   spacing={4}>
    <Grid item lg={4}>
      < Card4 />
    </Grid>
    <Grid item lg={4}>
     < Card4 />

    </Grid>
    <Grid item lg={4}>
    < Card4 />

    </Grid>
  </Grid>
  )
}

export default Grid4
