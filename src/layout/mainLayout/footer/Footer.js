import React from 'react';
import { makeStyles } from '@mui/styles';
import { Grid, Paper,  Link, Icon, Button } from '@material-ui/core';

import {
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  LinkedIn as LinkedInIcon,
  Instagram as InstagramIcon,
  GitHub as GitHubIcon,
  Telegram as TelegramIcon,
  //   Discord as DiscordIcon,
} from '@material-ui/icons';
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AppleIcon from '@mui/icons-material/Apple';
import { Typography } from '@mui/material';


const useStyles = makeStyles({
  root: {
    backgroundColor: '#2E2D3A',
    width:"100%",
  },
  paper: {
    margin: '5%', // Set the margin to 5% on all sides
    padding: "10px",
    backgroundColor: '#393747',
    maxWidth: '90%', // Set the maximum width to 90% of the available space
    margin: '0 auto', // Center the container horizontally
  },
  list: {
    padding: "10px",
    backgroundColor: '#393747',
    color:"white",
    maxWidth: '90%', // Set the maximum width to 90% of the available space
    margin: '0 auto', // Center the container horizontally
  },
  copyright: {
    marginTop: '1.5625vw',
    marginLeft: '15.59375vw',
    // Set the margin to 5% on the left side
  },
  socialIcons: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '25.59375vw',
    marginTop: "10px",
  },
  flag: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 'auto',
  },
  buttons: {
    display: 'flex',
    marginTop: '20px',
    marginLeft: '10px', // Set the margin to 10px on the left side
  },
});
const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <Grid container style={{marginBottom:"10vw"}} spacing={2}>
        <Grid item xs={4} sm={4}>
          <Paper className={classes.paper}>
            <Typography variant="h3" sx={{fontSize:{ xs: "17px", md: "50px"},color:"#F78C89",fontWeight: "bold" }}>5-12 Classes</Typography>
          </Paper>
        </Grid>
        
        <Grid item xs={4} sm={4}>
          <Paper className={classes.paper}>
            <Typography variant="h3"sx={{fontSize:{ xs: "17px", md: "50px"} ,color:"#FFD885",fontWeight: "bold" }}>22 Boards</Typography>
          </Paper>
        </Grid>
        <Grid item xs={4} sm={4}>
          <Paper className={classes.paper}>
            <Typography variant="h3"sx={{fontSize:{ xs: "17px", md: "50px"} ,color:"#A0E8BD",fontWeight: "bold" }}>58 Exams</Typography>
          </Paper>
        </Grid>
      </Grid>
      <Grid container style={{  color:"blue" }} spacing={2}>

        <Grid item xs={12} sm={3}>
          <Paper className={classes.list}>
            <Typography variant="h6">COMPANY</Typography>
            <ul>
              <li>About Us</li>
              <li>Brand Resources</li>
              <li>Jobs</li>
              <li>Press</li>
              <li>Fellowship</li>
              <li>Student Reviews</li>
            </ul>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper className={classes.list}>
            <Typography variant="h6"> OTHER </Typography>

            <ul>
              <li>Customer Stories</li>
              <li>Guides</li>
              <li>Parent Reviews</li>
              <li>Ask</li>
              <li>Blog</li>
              <li>Teacher Reviews</li>
            </ul>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper className={classes.list}>
            <Typography variant="h6">FEATURES</Typography>
            <ul>
              <li>Video Classes</li>
              <li>All India Test Series</li>
              <li>Student Stories</li>
              <li>Student Stories</li>
              <li>Student Stories</li>
            </ul>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={3}>
        <Paper className={classes.list}>
            <Typography variant="h6">IMPORTANT</Typography>
            <ul>
              <li>LIVE Classes</li>
              <li>All India Test Series</li>
              <li>Student Stories</li>
              <li>Student Stories</li>
              <li>Student Stories</li>
            </ul>
          </Paper>
        </Grid>
         
      </Grid>
      <Grid container spacing={3}>
      <Grid item lg={3}>
      <div className={classes.buttons}>
      <Button variant="contained" style={{ backgroundColor: "black" }}>
                <PlayArrowIcon style={{ color: "white" }} />
                <Typography style={{ color: "white" }} variant="body2">
                  Google Play
                </Typography>{" "}
              </Button>{" "}
              <Button variant="contained" style={{ backgroundColor: "black",marginLeft:"5px" }}>
                <AppleIcon style={{ color: "white" }} />
                <Typography style={{ color: "white" }} variant="body2">
                  App Store
                </Typography>{" "}
              </Button>
      </div>
     
      </Grid>
      
      <Grid item lg={4}>
      <div className={classes.copyright}>
        <Typography style={ {color:"white",} } variant="h6">
          Copyright&copy;YourName
        </Typography>
      </div>
      
      </Grid>
      <Grid item lg={4}>
      <div className={classes.socialIcons}>
        <Link href="#">
          <FacebookIcon  style={{margin:"10px"}}/>
        </Link>
        <Link href="#">
          <TwitterIcon  style={{margin:"10px"}}/>
        </Link>
        <Link href="#">
          <LinkedInIcon  style={{margin:"10px"}}/>
        </Link>
        <Link href="#">
          <InstagramIcon  style={{margin:"10px"}}/>
        </Link>
        <Link href="#">
          <GitHubIcon  style={{margin:"10px"}}/>
        </Link>
        <Link href="#">
          <TelegramIcon style={{margin:"10px"}} />
        </Link>
        <Link href="#">
          {/* <DiscordIcon /> */}
        </Link>
      </div>
       
      </Grid>
      </Grid>
    </footer>
  )
};

export default Footer;
