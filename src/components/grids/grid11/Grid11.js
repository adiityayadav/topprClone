import React from 'react';
import { Grid, Card, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Avatar } from '@material-ui/core';
import { CLATexamData } from '../../../constants/CLATexamData';
import { Typography } from '@mui/material';
import Card5 from '../../card/card5/Card5';
const Grid11 = () => {
  return (
    <Grid container spacing={2}>
      {CLATexamData.map((item) => (
    <Grid item xs={6} sm={6} md={3}  key={item.title}>
    <Card5  title={item.title} imageUrl={item.imageUrl} />
 
 </Grid>
      ))}
    </Grid>
  )
}

export default Grid11
