import { Grid } from '@mui/material'
import React from 'react'
import Card7 from '../../card/card7/Card7'

const Grid13 = () => {
  return (
    <Grid container style={{ margin:"2vw"}}  >
    <Grid  item xs={12}md={4}  >
    <Card7
        title="Credit Card"   icon="credit"
        benefits={['Extra savings', 'Emi Options', 'Cancel anytime']}
      />
      </Grid>
      <Grid item xs={12}md={4}>
      <Card7
       title="Netbanking"   icon="credit"
        benefits={['Fast', 'Secure', 'No hassle']}
      />
      </Grid>
      <Grid item xs={12}md={4}>
      <Card7
        title="UPI/BHIM"   icon="credit"
        benefits={['Fast', 'Secure', 'No hassle']}
     /> 
      </Grid>
       

      </Grid>
  )
}

export default Grid13
