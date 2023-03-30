import React from 'react';
import { Card, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Avatar } from '@material-ui/core';
import { Typography } from '@mui/material';

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    maxHeight: 200,
    backgroundColor: 'white',
    color: 'black',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    marginTop: "20px",
    height: "120px",
    width: "120px",
  },
   
});

const  Card5 = ({ title, imageUrl }) => {
  const classes = useStyles();

  return (
   
       
        <Paper className={classes.root}>
          <Avatar className={classes.avatar} src={imageUrl} alt="" />
          <Typography variant="h6" sx={{ fontSize: { xs: 8, sm: 12 },
    fontWeight: 'bold' }}>
            {title}
          </Typography>
        </Paper>
     
    
  );
};

export default  Card5;
