import React from "react";
import { makeStyles } from "@mui/styles";
import Button  from '@mui/material/Button';
import Video from "./Video";
import Grid4 from "../../../components/grids/grid4/Grid4";
import { Typography } from "@mui/material";


const useStyles = makeStyles( {
  root: {
    marginTop: " 3.125vw",
    marginRight: "0.78125vw",
    marginLeft: "0.78125vw",
    '@media (max-width: 600px)': {
      marginTop: "15vw",
      marginRight: "10vw",
      marginLeft: "10vw",
    },
  },
  flexBox: {
    display: "flex",
    alignItems: "center",
    '@media (max-width: 600px)': {
      flexDirection: "column",
    },
  },
  cardGrid: {},
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardContent: {
    flexGrow: 1,
  },
  typo1: {
    maxWidth:"80%",
    margin:"3vw",
    fontWeight: 'bold',
    color: 'grey',
    fontSize: '4vw',
    lineHeight: 1.2,
    '@media (max-width: 600px)': {
      fontSize: '3rem',
      lineHeight: 1.8,
    },
  },
  typo2: {
     maxWidth:"40%",
     '@media (max-width: 800px)': {
      display: "none",
    },
  },
});

export default function Block5() {
  const classes = useStyles();

  return (<>
    <div className={classes.root}>
      <div className={classes.flexBox}>
     
        <Typography   sx={{ fontWeight: 'bold', margin:"3vw", textAlign: "center",fontSize: { xs: 25, sm: 32, md: 38} , color:"gray"}}>

            Built for all boards and exams with widest syllabus coverage
          </Typography>
       
        <div  className={classes.typo2}>
          <Typography style={{fontWeight:"bold"}} variant="h5">
            Your learning needs are unique and we do everything to ensure that
            they are met.
          </Typography>

          <Typography variant="body1">
            Students can chart their own path by creating customised syllabus
            that helps them attain their learning goals. With over 120,000
            syllabus combinations at their disposal to choose from, learning was
            never so easy.
          </Typography>
        </div>
      </div>
      </div>
      <div style={{margin:"3px"}}>
      < Grid4 />
      
      </div>
     
      
  
   
   
   <Video />
   </>
  );
}
