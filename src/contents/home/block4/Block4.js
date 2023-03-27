import React from 'react';
import { makeStyles } from '@mui/styles';
import { Typography } from '@mui/material';
import Grid3 from '../../../components/grids/grid3/Grid3';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    marginTop:" 2vw",
  },
  heading: {
    textAlign: 'center',
    margin: "10px",
    color: "grey"
  },
});
const Block4 = () => {
    const classes = useStyles();

    return (
      <>
       <Typography   sx={{ fontWeight: 'bold', margin:"3vw", textAlign: "center",fontSize: { xs: 25, sm: 32, md: 38} , color:"gray"}}>
       India's most awarded edtech platform
</Typography>
 
        <Grid3 /> 
      </>
   
    );
  }
  

export default Block4
