import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Button,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
      margin: '0 auto',
      marginTop: theme.spacing(4),
    },
    header: {
      textAlign: 'center',
      backgroundColor:"#259FFB",
      color: theme.palette.common.white,
    },
    title: {
      fontWeight: 'bold',
      fontSize: '2rem',
    },
    content: {
      textAlign: 'center',
      padding: theme.spacing(2),
      backgroundColor:"#e0e0e0",
    },
    button: {
      margin: theme.spacing(1),
      backgroundColor:"#259FFB",
      color: "white",
    },
  }));
 
const  Card6 = ({ title, price, benefits }) => {
    const classes = useStyles();
  
    return (
      <Card className={classes.root}>
        <CardHeader className={classes.header} title={<Typography className={classes.title}>{title} Plan</Typography>} />
        <CardContent className={classes.content}>
          <Typography variant="h4">${price}</Typography>
          <Typography variant="subtitle1">per {title}</Typography>
          <ul>
            {benefits.map((benefit, index) => (
              <Typography variant="subtitle2" key={index}>
                <li>{benefit}</li>
              </Typography>
            ))}
          </ul>
          <Button variant="contained"   className={classes.button}>
            Choose Plan
          </Button>
        </CardContent>
      </Card>
    );
  };
  

export default Card6

