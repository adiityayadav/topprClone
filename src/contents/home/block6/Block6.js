import React from 'react';
import { makeStyles } from '@mui/styles';
import SwiggySlider1 from '../../../components/mainCarousel/SwiggySlider/SwiggySlider1';
import { Typography } from '@mui/material';


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

const sliderData = [
    {
      id: 1,
      image: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg",
      title: "The best Restaurant",
      description:
        "Et recusandae nihil et perferendis dolor ab totam eveniet aut quod accusamus aut officia aperiam aut explicabo ipsum! Sit aperiam aspernatur cum libero veritatis cum magnam itaque vel enim consequatur non porro aliquam a maiores ipsum. Hic odio quaerat et rerum deserunt hic consequuntur vitae et placeat doloribus aut magnam possimus.",
      author: "Van Chuan",
      date: "12/22/20",
    },
    {
      id: 2,
      image: "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg",
      title: "It was Delicious",
      description:
        "Et recusandae nihil et perferendis dolor ab totam eveniet aut quod accusamus aut officia aperiam aut explicabo ipsum! Sit aperiam aspernatur cum libero veritatis cum magnam itaque vel enim consequatur non porro aliquam a maiores ipsum. Hic odio quaerat et rerum deserunt hic consequuntur vitae et placeat doloribus aut magnam possimus.",
      author: "Chek Mary",
      date: "12/22/20",
    },
    {
      id: 3,
      image: "https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg",
      title: "I am Delighted",
      description:
        "Et recusandae nihil et perferendis dolor ab totam eveniet aut quod accusamus aut officia aperiam aut explicabo ipsum! Sit aperiam aspernatur cum libero veritatis cum magnam itaque vel enim consequatur non porro aliquam a maiores ipsum. Hic odio quaerat et rerum deserunt hic consequuntur vitae et placeat doloribus aut magnam possimus.",
      author: " Hurry Lama",
      date: "12/22/20",
    },
    {
      id: 4,
      image: "https://images.pexels.com/photos/2108843/pexels-photo-2108843.jpeg",
      title: "I will visit again",
      description:
        "Et recusandae nihil et perferendis dolor ab totam eveniet aut quod accusamus aut officia aperiam aut explicabo ipsum! Sit aperiam aspernatur cum libero veritatis cum magnam itaque vel enim consequatur non porro aliquam a maiores ipsum. Hic odio quaerat et rerum deserunt hic consequuntur vitae et placeat doloribus aut magnam possimus.",
      author: " Smith Curry",
      date: "12/22/20",
    },
    {
      id: 5,
      image: "https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg",
      title: "The Restaurant",
      description:
        "Et recusandae nihil et perferendis dolor ab totam eveniet aut quod accusamus aut officia aperiam aut explicabo ipsum! Sit aperiam aspernatur cum libero veritatis cum magnam itaque vel enim consequatur non porro aliquam a maiores ipsum. Hic odio quaerat et rerum deserunt hic consequuntur vitae et placeat doloribus aut magnam possimus.",
      author: "Van Chuan",
      date: "12/22/20",
    },
  ];
export default function DifferentShapeComponent() {
  const classes = useStyles();

  return (
    
  <div className={classes.root} >
            <Typography   sx={{ fontWeight: 'bold', margin:"3vw", textAlign: "center",fontSize: { xs: 25, sm: 32, md: 38} , color:"gray"}}>

      Students, Parents & Experts Love Us!
      </Typography>
    <div >
       <SwiggySlider1 sliderData={sliderData} />
    </div>
  </div>
  );
}
