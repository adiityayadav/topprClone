import { Button, Grid, Typography } from '@material-ui/core'
import React from 'react'
import LaptopIcon from '@mui/icons-material/Laptop';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import TabletIcon from '@mui/icons-material/Tablet';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AppleIcon from '@mui/icons-material/Apple';
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles((theme) => ({
    container: {
      display: "flex",
    },
    leftBox: {
      width: "40%",
      padding: "10px",
      // [theme.breakpoints.down("sm")]: {
      // width: "100%",      
      // },
      
    },
    rightBox: {
      width: "60%",
      padding: "10px",
      // [theme.breakpoints.down('sm')]: {
      //    display:"none",
      //    width: "0%",
  
      // },
    },
    root1: {
      backgroundColor: '#00b0ff',
      borderRadius: '3.125vw',
      margin: '3.125vw',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop:"-800px",
      opacity:"1",
      zIndex:"9",
    },
    leftContainer1: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      width: '60%',
    //   [theme.breakpoints.down('sm')]: {
         
    //     width: "100%",
  
    //  },
      
    },
    rightContainer1: {
      width: '40%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    //   [theme.breakpoints.down('sm')]: {
    //     display:"none",
    //     width: "0%",
  
    //  },
    },
    heading1: {
      fontWeight: 'bold'
    },
    paragraph1: {
     color:"white",
      marginLeft:"3.125vw",
    },
    theading:{
      color: "grey", 
      fontWeight: "bold" ,
      // [theme.breakpoints.down("sm")]: {
      //   variant: "h4",
      // },
    },
  }));


const Grid5 = () => {
    const classes = useStyles();

  return (
    <Grid container style={{ marginTop: "1.5625vw" }} spacing={3}>
    <Grid item xs={4}>
      <div className={classes.card}>
        <SmartphoneIcon style={{ fontSize: "7.03125vw" }} />
        <Typography style={{ fontWeight: "bold" }} variant="h6">
          Mobiles
        </Typography>
        <Typography variant="body2" style={{ color: "grey" }}>
          iOS & Android
        </Typography>
      </div>
    </Grid>
    <Grid item xs={4}>
      <div className={classes.card}>
        <TabletIcon style={{ fontSize: "7.03125vw" }} />
        <Typography style={{ fontWeight: "bold" }} variant="h6">
          Tablets
        </Typography>
        <Typography variant="body2" style={{ color: "grey" }}>
          Android & iPad
        </Typography>
      </div>{" "}
    </Grid>
    <Grid item xs={4}>
      <div className={classes.card}>
        <LaptopIcon style={{ fontSize: "7.03125vw" }} />
        <Typography style={{ fontWeight: "bold" }} variant="h6">
          Desktops
        </Typography>
        <Typography variant="body2" style={{ color: "grey" }}>
          All Browsers
        </Typography>
      </div>
    </Grid>
    <Grid item xs={6}>
      <div className={classes.card}>
        {" "}
        <Button variant="contained" style={{ backgroundColor: "black" }}>
          <PlayArrowIcon style={{ color: "white" }} />
          <Typography style={{ color: "white" }} variant="h6">
            Google Play
          </Typography>{" "}
        </Button>{" "}
      </div>
    </Grid>
    <Grid item xs={6}>
      <div className={classes.card}> <Button variant="contained" style={{ backgroundColor: "black" }}>
          <AppleIcon style={{ color: "white" }} />
          <Typography style={{ color: "white" }} variant="h6">
            App Store
          </Typography>{" "}
        </Button>{" "}</div>
    </Grid>
  </Grid> 
  )
}

export default Grid5
