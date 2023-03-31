import { Grid } from '@material-ui/core'
import React from 'react'
import { Card4Data } from '../../../constants/Card4Data'
import Card4 from '../../card/card4/Card4'

const Grid4 = () => {
  return (
    <Grid container   spacing={1}>
          {Card4Data.map((item) => (
      <Grid item  lg={4} key={item.title}>
       <Card4/>
       </Grid>
      ))}
    </Grid> 
  )
}

export default Grid4
