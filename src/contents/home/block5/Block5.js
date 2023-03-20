import React from "react";
import { makeStyles } from "@mui/styles";
import Typography from "@material-ui/core/Typography";
import Button  from '@mui/material/Button';
import Video from "./Video";
import Grid4 from "../../../components/grids/grid4/Grid4";


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
    '@media (max-width: 600px)': {
      display: "none",
    },
  },
});

export default function Block5() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.flexBox}>
        <div>
          <Typography className={classes.typo1}  variant="h2">
            Built for all boards and exams with widest syllabus coverage
          </Typography>
        </div>
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
      < Grid4 />
      <div style={{margin:"40px"}}>
      <Button variant="contained"color="secondary" style={{borderRadius:"15px", fontWeight:"bold"}}  >
        <Typography variant="h5"> GET STARTED-----></Typography>
      </Button>
      </div>
      
      <Video />
      
    </div>
  );
}
