import { Grid } from '@material-ui/core'
import React from 'react'
import Card1 from '../../card/card1/Card1'

const Grid1 = () => {
  return (
    <Grid container  >
    <Grid  item xs={12}md={6}>
         <Card1 />
      </Grid>
      <Grid item xs={12}md={6}>
         <Card1 />
      </Grid>
      <Grid item xs={12}md={6}>
         <Card1 />
      </Grid>
      <Grid item xs={12}md={6}>
         <Card1 />
      </Grid>

      </Grid>
  )
}

export default Grid1
