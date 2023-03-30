import { Grid } from '@mui/material'
import React from 'react'
import Card6 from '../../card/card6/Card6'

const Grid12 = () => {
  return (
    <Grid container style={{ margin:"2vw"}}  >
    <Grid  item xs={12}md={4}  >
    <Card6
        title="1 Month "
        price="10"
        benefits={['Access to all courses', 'Monthly billing', 'Cancel anytime']}
      />
      </Grid>
      <Grid item xs={12}md={4}>
      <Card6
        title="1 Year "
        price="100"
        benefits={['Access to all courses', 'Annual billing', 'Save $20/year']}
      />
      </Grid>
      <Grid item xs={12}md={4}>
      <Card6
        title="5 Year "
        price="250"
        benefits={['Access to all courses', 'One-time payment', 'Save Hugely']}
     /> 
      </Grid>
       

      </Grid>
    
  )
}

export default Grid12
