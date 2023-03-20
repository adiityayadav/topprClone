import React from 'react';
import { makeStyles } from '@mui/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import ArrowCircleUpRoundedIcon from '@mui/icons-material/ArrowCircleUpRounded';
import Grid1 from '../../../components/grids/grid1/Grid1';
const useStyles = makeStyles( {
  root: {
    
  },
  menuButton: {
    marginRight: "10px",
  },
  title: {
     color: "black",
     fontWeight: "bold"
  },
  paper: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: '5px',
    borderRadius: '5px',
  },
   Button: {
    color: 'white',
    border: '1px solid black',
    borderRadius: '5px',
    backgroundColor: 'black',
    marginLeft: '10px',
    marginRight: '10px',
    padding: '5px',
  },
  buttonGroup: {
    display: "flex",
    marginLeft: " 70.3125vw",
    "@media (max-width: 480px)": {
      margin: '20px'
   },
  
  },
  card: {
    minWidth: 275,
    maxWidth: 345,
    margin: "10px",
  },
});
export default function Block2() {
    const classes = useStyles();
     
    return (
      <div className={classes.root}>
         
        <Toolbar style={{ backgroundColor: 'white' }}>
          <Paper className={classes.paper}>
            <IconButton edge="start" className={classes.menuButton} aria-label="menu">
              <ArrowCircleUpRoundedIcon style={{color:"blue"}} />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Toppr
            </Typography>
          </Paper>
          <div className={classes.buttonGroup}>
          <Typography className={classes.Button} variant="h6">Login</Typography>
          <Typography className={classes.Button} variant="h6">SignUp</Typography>
          </div>
        </Toolbar>
        
        <div style={{margin:"3vw"}}>
        <Typography style={{  fontWeight: "bold", }} variant="h2" >
        Better Learning. Better Results.</Typography>
  
        <Typography style={{color: "blueviolet", fontWeight: "bold"}} variant="h2"  >
          One platform for all your learning needs
        </Typography>
        </div>
       < Grid1 />
      </div>
    )
  };