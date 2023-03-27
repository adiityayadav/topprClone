import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Dialog, Typography } from '@mui/material';

import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import ArrowCircleUpRoundedIcon from '@mui/icons-material/ArrowCircleUpRounded';
import Grid1 from '../../../components/grids/grid1/Grid1';
import { SignUp } from '../../../layout/authorisation/signup/SignUp';
import {Login }from '../../../layout/authorisation/login/Login';


const useStyles = makeStyles({
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
    paddingLeft: '20px',
    paddingRight: '20px',
  },
  buttonGroup: {
    display: "flex",
    marginLeft: " 65.3125vw",
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
  const [openSignUpDialog, setOpenSignUpDialog] = useState(false);
  const [OpenLoginDialog, setOpenLoginDialog] = useState(false);
  const handleSignUpClick = () => {
    setOpenSignUpDialog(true);
  };
  const handleLoginClick = () => {
    setOpenLoginDialog(true);
  };
  const handleSignUpClose = () => {
    setOpenSignUpDialog(false);
  };
  const handleLoginClose = () => {
    setOpenLoginDialog(false);
  };
  return (
    <div className={classes.root}>
      <Toolbar style={{ backgroundColor: 'white' }}>
        <Paper style={{backgroundColor:"white",}} className={classes.paper}>
        
          <IconButton edge="start" className={classes.menuButton} aria-label="menu">
            <ArrowCircleUpRoundedIcon style={{ color: "#259FFB", fontWeight: "40px" }} />
          </IconButton>
          <Typography variant="h6" sx={{ fontWeight: "bolder", color: "black" }}>
            Toppr
          </Typography>
        </Paper>
        <div className={classes.buttonGroup}>
          <Typography sx={{ marginRight: '10px',cursor: 'pointer' }} className={classes.Button} variant="h6" onClick={handleLoginClick} >LOGIN</Typography>
           <Login open={OpenLoginDialog} onClose={handleLoginClose} />

          <Typography   variant="h6" onClick={handleSignUpClick} sx={{cursor: 'pointer'}} className={classes.Button} >SIGNUP</Typography>
            <SignUp  open={openSignUpDialog} onClose={handleSignUpClose} />
        </div>
      </Toolbar>

      <div style={{ margin: "3vw" }}>
        <Typography sx={{ fontWeight: 'bold', margin: "1vw", textAlign: "center", fontSize: { xs: 29, sm: 37, md: 55 }, color: "black" }}>

          Better Learning. Better Results.
        </Typography>

        <Typography sx={{ fontWeight: 'bold', margin: "1vw", textAlign: "center", fontSize: { xs: 29, sm: 37, md: 55 }, color: "#259FFB" }}>

          One platform for all your learning needs
        </Typography>
      </div>
      < Grid1 />
    </div>
  )
};