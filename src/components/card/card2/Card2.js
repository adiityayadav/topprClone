import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Divider } from "@material-ui/core";
import { makeStyles } from "@mui/styles";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import Paper from "@material-ui/core/Paper";
import ArrowCircleUpRoundedIcon from "@mui/icons-material/ArrowCircleUpRounded";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles({
  cardContent: {
    marginRight: "auto",
    marginLeft: "auto",
    textAlign: "center",
  },
  cardActions: {
    justifyContent: "center",
    textAlign: "center",
  },
  paper: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: "5px",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "auto",
    marginBottom: "auto",
  },
  title: {
    fontWeight: "bold",
    color: "2CC2FC",
  },
  title1: {
    fontSize: "10px",
    fontWeight: "bold",
    color: "white",
  },
  button:{
   padding:"0px",
  },

});

const Card2 = () => {
  const classes = useStyles();
  return (
    <Card style={{ backgroundColor: "white", margin: "auto", marginTop: "30px" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button  style={{color:"2CC2FC" }}   >
          <IconButton
            edge="start"
             
            aria-label="menu"
          >
            <ArrowCircleUpRoundedIcon style={{ color: "2CC2FC", fontSize: "30px" }} />
          </IconButton>
          <Typography variant="h5" className={classes.title}>
            Toppr
          </Typography>{" "}
        </Button>
        <Button variant="contained"   className={classes.button}>
          <Typography variant="h5"  >
            JEE
          </Typography>
        </Button>
      </div>
      <CardMedia
        sx={{ height: 200 }}
        image="https://static-cf.toppr.com/marketing/6c448a3/images/home/examJEE2x.png"
        title="green iguana"
      />
      <CardContent className={classes.cardContent}>
        <Typography
          style={{ fontWeight: "bold" }}
          gutterBottom
          variant="h5"
          component="div"
        >
          Complete learning app{" "}
        </Typography>
        <Typography
          style={{ color:"2CC2FC", fontWeight:"bold" }}
          
          variant="h5"
          
        >
          for school and exams{" "}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button  style={{color:"2CC2FC"}} size="large">
          {" "}
          Explore------>
        </Button>
      </CardActions>
    </Card>
  );
};

export default Card2;
