import React from 'react';
import { makeStyles } from '@mui/styles';
// import Typography from '@material-ui/core/Typography';
import Grid2 from '../../../components/grids/grid2/Grid2';
import { Typography } from '@mui/material';

const useStyles = makeStyles({
  card: {
    backgroundColor: 'lightgray',
    padding: '16px',
  },
});

function Block3() {
  const classes = useStyles();

  return (
    <>
     <Typography   sx={{ fontWeight: 'bold', margin:"3vw", textAlign: "center",fontSize: { xs: 25, sm: 32, md: 38} , color:"gray"}}>
Our plans for competitive exams
</Typography>


      <Grid2 /> 


      
    </>
  )
};

export default Block3;
