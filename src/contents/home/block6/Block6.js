import React from 'react';
import { makeStyles } from '@mui/styles';
import SwiggySlider1 from '../../../components/mainCarousel/SwiggySlider/SwiggySlider1';
import { Typography } from '@mui/material';
import { SliderData } from '../../../constants/SliderData';


const useStyles = makeStyles( {
   
 
  heading: {
    display:"flex",
    justifyContent: "center",
    fontWeight: 'bold',
    color: 'grey',
    margin : '5vw',
    fontSize: '2rem', // Set a default font size
  },
  '@media (min-width: 768px)': { // Apply styles only when the screen width is 768px or more
    root: {
         // Reduce the maximum width to 600px on larger screens
    },
    heading: {
      fontSize: '3rem', // Increase the font size on larger screens
    },
  },
});

 
export default function DifferentShapeComponent() {
  const classes = useStyles();

  return (
    
  <div className={classes.root} >
            <Typography   sx={{ fontWeight: 'bold', margin:"3vw", textAlign: "center",fontSize: { xs: 25, sm: 32, md: 38} , color:"gray"}}>

      Students, Parents & Experts Love Us!
      </Typography>
    <div >
       <SwiggySlider1 sliderData={SliderData} />
    </div>
  </div>
  );
}
