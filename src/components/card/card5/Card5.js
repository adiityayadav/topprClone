import React from 'react';
import { Paper, Avatar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(2),
  },
  avatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    marginRight: theme.spacing(2),
  },
  heading: {
    fontWeight: 'bold',
  },
}));

const data = [
  { name: 'John Doe', avatar: 'https://example.com/avatar1.jpg' },
  { name: 'Jane Smith', avatar: 'https://example.com/avatar2.jpg' },
  { name: 'Bob Johnson', avatar: 'https://example.com/avatar3.jpg' },
];

const Card5 = () => {
  const classes = useStyles();

  return (
    <>
      {data.map((item) => (
        <Paper className={classes.paper} key={item.name}>
          <Avatar className={classes.avatar} alt={item.name} src={item.avatar} />
          <div>
            <Typography variant="h6" className={classes.heading}>
              {item.name}
            </Typography>
            <Typography variant="body1">Lorem ipsum dolor sit amet</Typography>
          </div>
        </Paper>
      ))}
    </>
  );
};

export default Card5;
