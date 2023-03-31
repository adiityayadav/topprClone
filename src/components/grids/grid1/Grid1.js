import { Grid } from '@material-ui/core'
import React from 'react'
import Card1 from '../../card/card1/Card1'
import { Card1Data } from '../../../constants/Card1Data'

const Grid1 = () => {
  return (
   <Grid container spacing={2}> 
   {Card1Data.map((item) => (
      <Grid item xs={12} sm={6}  key={item.title}>
       <Card1   />
       </Grid>
      ))}
    </Grid>
  );
};


export default Grid1
