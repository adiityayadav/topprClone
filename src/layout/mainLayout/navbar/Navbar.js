import React from 'react';
import { makeStyles } from '@mui/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Typography } from '@mui/material';
import UserLocation from '../../../adapters/UserLocation';
import { Box } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
   
  menuButton: {
    
  },
  menuButton1: {
    
  },
  menuButton2: {
    color: "grey",
    marginLeft: "45vw",
  },
  drawer: {
    width: 250,
    display: "flex",
    flexDirection: "column",
    justify: "center",
    alignItems: "center",
    marginLeft: "40px"
  },
});

export default function Navbar() {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const isSmallScreen = window.matchMedia('(max-width: 600px)').matches;

  const toggleDrawer =()=> {
    setDrawerOpen(!drawerOpen);
  };
  return (
    <div >
      <AppBar position="static" style={{ background:'white' }}>
        <Toolbar>
          {isSmallScreen ? ( <>
            {/* <Link to="/"> */}
            <IconButton edge="start" style={{}} color="inherit" aria-label="menu">
              <HomeIcon style={{ fontSize: "35px" }} />
            </IconButton>
            {/* </Link> */}
            <UserLocation />
            <IconButton edge="start" className={classes.menuButton2} color="inherit" aria-label="menu" onClick={toggleDrawer}>
              <MenuIcon style={{ fontSize:"35px" }} />
            </IconButton></>
          ) : (<> 
            <IconButton edge="start" style={{color: "#259FFB", marginLeft: "15px"}} color="inherit" aria-label="menu">
              <HomeIcon style={{ fontSize: "35px" }} />
            </IconButton>
            
            {/* <Link to="/guides"> */}
              <Typography variant="h6" sx={{color: "#397CB7",marginLeft: "40px",fontSize: "18px"}}  >GUIDES </Typography>
              {/* </Link>    */}
           
            <Typography variant="h6" sx={{color: "#397CB7",marginLeft: "40px",fontSize: "18px"}} >
            CODER
            </Typography>
            <Typography variant="h6" sx={{color: "#397CB7",marginLeft: "40px",fontSize: "18px"}} >
            SCHOOLOS
            </Typography>
            <Typography variant="h6" sx={{color: "#397CB7",marginLeft: "40px",fontSize: "18px"}} >
            STAR
            </Typography>
            <Box style={{color: "#397CB7" , display:"flex", alignItems:"flex-end" ,fontSize: "18px", marginLeft:"40vw" }} >
            <UserLocation />    </Box>
          </>)}
          <Drawer anchor="top" open={drawerOpen} onClose={toggleDrawer}>
            <div className={classes.drawer} >
              <List>
                <ListItem button>
                  <ListItemText primary="LEARNING APP" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="CODER" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="SCHOOL OS" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="STAR" />
                </ListItem>
              </List>
            </div>
          </Drawer>
        </Toolbar>
      </AppBar>
    </div>
  )
};
