import React from "react";
import { makeStyles } from "@mui/styles";
import Box from "@material-ui/core/Box";
import Typography from "@mui/material/Typography";
import Grid5 from "../../../components/grids/grid5/Grid5";
import { Button } from "@material-ui/core";
import { Diversity2TwoTone } from "@mui/icons-material";
const useStyles = makeStyles( {
    container: {
        display: "flex",
    },
    leftBox: {
        width: "40%",
        padding: "10px",
        '@media (max-width: 960px)': {
            width: "100%",
        },

    },
    rightBox: {
        width: "60%",
        padding: "10px",
        '@media (max-width: 960px)': {
            display: "none",
            width: "0%",
        },
    },
    root1: {
        backgroundColor: '#00b0ff',
        borderRadius: '3.125vw',
        margin: '3.125vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: "-800px",
        opacity: "1",
        zIndex: "9",
    },
    leftContainer1: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        width: '60%',
        margin:"5vw",
        '@media (max-width: 960px)': {
            width: "100%",
        },
    },
    rightContainer1: {
        width: '40%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '@media (max-width: 960px)': {
            display: "none",
            width: "0%",
        },
    },
    heading1: {
        fontWeight: 'bold'
    },
    paragraph1: {
        color: "white",
        marginLeft: "3.125vw",
    },
    theading: {
        color: "white",
        fontWeight: "bolder",
        '@media (max-width: 960px)': {
            variant: "h4",
        },
    },
    button:{
        display:"flex",
        "@media (max-width: 480px)": {
            display:"inline",
          },
    },
});

export default function Block7() {
    const classes = useStyles();

    return (
        <> 
            <Box>
                <Box className={classes.container}>
                    <Box className={classes.leftBox}>
                    <Typography   sx={{ fontWeight: 'bold', margin:"3vw", textAlign: "center",fontSize: { xs: 25, sm: 32, md: 38} , color:"gray"}}>

                            Toppr app is available on all platforms
                        </Typography>
                        <Grid5 />
                    </Box>
                    <Box className={classes.rightBox}><img src="https://static-cf.toppr.com/marketing/6c448a3/images/home/tablet-and-phone-mock-for-grukhs@2x.png" alt="img" style={{ height: "500px", width: "650px" }} />  </Box>
                </Box>
                <Box style={{ marginTop: "400px ", backgroundColor: "#212121", height: "500px" }}>

                </Box>

                <Box className={classes.root1}>
                    <Box className={classes.leftContainer1}>
                        <Typography className={classes.theading} variant="h2">
                            {" "}
                            Book a free online
                            counselling session        </Typography>
                        <Typography variant="body1" style={{ margin: "2.34375vw" }} className={classes.paragraph1}>
                            Have any questions? An experienced Toppr Agent will be able to answer any questions you have and discuss academic goals as well as the unique needs of the learner.
                        </Typography>
                        <div className={classes.button}>
                            <Button variant="contained" style={{ backgroundColor: "black", margin: "4vw" }}>
                                <Typography style={{ color: "white" }} variant="h6">
                                BOOK DEMO--->
                                </Typography>{" "}
                            </Button>
                            <Button variant="contained" style={{ backgroundColor: "black", margin: "4vw" }}>
                                <Typography style={{ color: "white" }} variant="h6">
                                    SUBSCRIBE NOW
                                </Typography>{" "}
                            </Button>
                        </div>
                    </Box>
                    <Box className={classes.rightContainer1}>
                        <img src="https://static-cf.toppr.com/marketing/6c448a3/images/home/boy-with-tablet.png" alt="Placeholder" style={{ height: "450px", width: "450px" }} />
                    </Box>
                </Box>
            </Box>
        </>
    );
}
