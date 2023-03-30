import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardHeader,
  CardContent,
   
  Button,
} from '@material-ui/core';
import Card6 from '../../../components/card/card6/Card6';
import { Grid, Typography } from '@mui/material';
import Grid12 from '../../../components/grids/grid12/Grid12';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin: '0 auto',
    marginTop: theme.spacing(4),
  },
  header: {
    textAlign: 'center',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  title: {
    fontWeight: 'bold',
    fontSize: '2rem',
  },
  content: {
    textAlign: 'center',
    padding: theme.spacing(2),
  },
  button: {
    margin: theme.spacing(1),
  },
}));

const Block1 = () => {
  return (
    <>
 <Typography   sx={{ fontWeight: 'bold', margin:"3vw", textAlign: "center",fontSize: { xs: 25, sm: 32, md: 38} , color:"gray"}}>        Choose a plan that fits you best</Typography>
    <Grid12 /> 
    
    
</>
 );
};
export default  Block1