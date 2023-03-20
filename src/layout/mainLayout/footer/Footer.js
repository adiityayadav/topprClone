import React from 'react';
import { makeStyles } from '@mui/styles';
import { Grid, Paper, Typography, Link, Icon, Button } from '@material-ui/core';
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


const useStyles = makeStyles({
  root: {
    backgroundColor: '#212121',
    padding: "10px",
    maxWidth: '1200px', // Set the maximum width to 1200px
    margin: '0 auto', // Center the container horizontally
  },
  paper: {
    margin: '5%', // Set the margin to 5% on all sides
    padding: "10px",
    backgroundColor: '#37474f',
    maxWidth: '90%', // Set the maximum width to 90% of the available space
    margin: '0 auto', // Center the container horizontally
  },
  list: {
    padding: "10px",
    backgroundColor: '#37474f',
    maxWidth: '90%', // Set the maximum width to 90% of the available space
    margin: '0 auto', // Center the container horizontally
  },
  copyright: {
    marginTop: '1.5625vw',
    marginLeft: '5%', // Set the margin to 5% on the left side
  },
  socialIcons: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '33.59375vw',
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
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>
            <Typography variant="h3" style={{ fontWeight: "bold" }}>Card 1</Typography>
          </Paper>
        </Grid>
        
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>
            <Typography variant="h3" style={{ fontWeight: "bold" }}>Card 3</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>
            <Typography variant="h3" style={{ fontWeight: "bold" }}>Card 3</Typography>
          </Paper>
        </Grid>
      </Grid>
      <Grid container style={{  color:"blue" }} spacing={2}>

        <Grid item xs={12} sm={3}>
          <Paper className={classes.list}>
            <Typography variant="h6">List 1</Typography>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
              <li>Item 4</li>
              <li>Item 5</li>
            </ul>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper className={classes.list}>
            <Typography variant="h6">List 2</Typography>

            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
              <li>Item 4</li>
              <li>Item 5</li>
            </ul>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper className={classes.list}>
            <Typography variant="h6">List 3</Typography>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
              <li>Item 4</li>
              <li>Item 5</li>
            </ul>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper className={classes.list}>
            <Typography variant="h6">List 4</Typography>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
              <li>Item 4</li>
              <li>Item 5</li>
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
      <Grid item lg={6}>
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
