import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card2 from '../../card/card2/Card2';
import { Card2Data } from '../../../constants/Card2Data';
 

function Grid2() {

  return (
    <>
       
      <Grid container spacing={2}>
        {Card2Data.map((item) => (
      <Grid item xs={12} sm={12} md={4} lg={4} key={item.title}>
       <Card2   />
       </Grid>
      ))}
    </Grid>
       
    </>
  )
};

export default Grid2;
