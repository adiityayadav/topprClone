import { Grid } from '@material-ui/core'
import React from 'react'
import { Card3Data } from '../../../constants/Card3Data'
import Card3 from '../../card/card3/Card3'

const Grid3 = () => {
  return (
    <Grid container spacing={3}>
         {Card3Data.map((item) => (
      <Grid item  lg={4} key={item.title}>
       <Card3/>
       </Grid>
      ))}
    </Grid> 
  )
}

export default Grid3
