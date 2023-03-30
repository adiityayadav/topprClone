import React from 'react';
import { Grid  } from '@material-ui/core';
import { CMAcourseData } from '../../../constants/CMAcourseData';
import Card5 from '../../card/card5/Card5';
const Grid10 = () => {
  return (
    <Grid container spacing={2}>
      {CMAcourseData.map((item) => (
   <Grid item xs={6} sm={6} md={3}  key={item.title}>
   <Card5  title={item.title} imageUrl={item.imageUrl} />

</Grid>
      ))}
    </Grid>
  )
}

export default Grid10
