import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Divider } from '@material-ui/core';
import { makeStyles } from '@mui/styles';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import  Paper  from '@material-ui/core/Paper';
import ArrowCircleUpRoundedIcon from '@mui/icons-material/ArrowCircleUpRounded';
import IconButton from '@material-ui/core/IconButton';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
const useStyles = makeStyles({
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    marginRight: '1.5625vw',
  },
  cardActions: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    justifyContent: 'space-between',
  },
  paper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',   
  },
  title: {
    flexGrow: 1,
     fontWeight: "bolder", 
     color: "blueviolet",
      
     
  },
  title1: {
    flexGrow: 1,
     fontWeight: "bolder", 
     color: "white",
 
  },
  button:{
    marginLeft:"10px",
    backgroundColor:"#2CB4FC" 

  },
});
export default function Card1() {
    const classes = useStyles();
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  return (
  <Paper style={{ margin: "3.125vw", backgroundColor: "white" }}>
  <div className={classes.paper}>
    <Button   color="secondary" className={classes.button}>
      <IconButton edge="start" className={classes.menuButton} aria-label="menu">
        <ArrowCircleUpRoundedIcon sx={{ fontSize: { xs: 25, md: 35 }, color: "#259FFB" }} />
      </IconButton>
      <Typography
        variant="h6"
        className={classes.title}
        sx={{ fontSize: { xs: 17, sm: 22, md: 26 }, fontWeight: "bolder", color: "black" }}
      >
        Toppr
      </Typography>
    </Button>
    <Button variant="contained"  style={{backgroundColor:"#2CB4FC" }} className={classes.button}>
      <Typography
        variant="h4"
        className={classes.title1}
        sx={{ fontSize: {   xs: 17, sm: 22, md: 26 }, fontWeight: "bolder" }}
      >
        learningApp
      </Typography>
    </Button>
  </div>

  <Card
    sx={{
      backgroundColor: "white" }}
  >
    <CardMedia
      sx={{ height: 200 }}
      image="https://static-cf.toppr.com/marketing/6c448a3/images/home/productLearnNew@2x.png"
      title="green iguana"
    />
    <CardContent className={classes.cardContent}>
      <Typography
        style={{ fontWeight: "bold" }}
        gutterBottom
        variant="h5"
        component="div"
        sx={{ fontSize: { xs: 25, sm: 35, md: 40 } }}
      >
        Complete learning app
      </Typography>
      <Typography
        style={{ color:"#2CC2FC" , fontWeight: "bold" }}
        gutterBottom
        variant="h5"
        component="div"
        sx={{ fontSize: { xs: 25, sm: 35, md: 40 }  }}
      >
        for school and exams
      </Typography>
      <Typography variant="body1"  sx={{ fontSize: { xs: 12, sm: 17, md: 21 }, color:"gray" }}>
        Class 5-12
      </Typography>
    </CardContent>

    <CardActions className={classes.cardActions}>
      <Button   style={{color:"#2CC2FC"}} size="">
        Explore------>
      </Button>
    </CardActions>
  </Card>
</Paper>

  );
}