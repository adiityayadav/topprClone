import { Grid } from '@material-ui/core'
import React from 'react'
import Card3 from '../../card/card3/Card3'

const Grid3 = () => {
  return (
    <Grid container spacing={3}>
    <Grid item  lg={4}>
       <Card3 />
    </Grid>
    <Grid item  lg={4}>
    <Card3 />
    </Grid>
    <Grid item  lg={4}>
    <Card3 />
    </Grid>
    <Grid item  lg={4}>
    <Card3 />
    </Grid>
    <Grid item  lg={4}>
    <Card3 />
    </Grid>
    <Grid item  lg={4}>
    <Card3 />
    </Grid>
     
  </Grid>
  )
}

export default Grid3
