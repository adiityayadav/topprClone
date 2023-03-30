import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import PaymentIcon from '@material-ui/icons/Payment';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import { Box } from '@mui/system';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        margin: 'auto',
        marginTop: theme.spacing(5),
    },
    icon: {
        fontSize: '48px',
        color: "#259FFB",
    },
    title: {
        marginBottom: theme.spacing(2),
    },
    subtitle: {
        color: theme.palette.text.secondary,
    },
    benefits: {
        marginTop: theme.spacing(2),
    },
    checkIcon: {
        marginRight: theme.spacing(1),
        fontSize: '16px',
        color: "#259FFB",
    },
}));

const Card7 = ({ title, icon, benefits }) => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardContent style={{backgroundColor:"#e0e0e0",}}>
                    <Typography className={classes.title} variant="h5" component="h2">
                        {title}

                    </Typography> 
                        {icon === 'monetization' && (
                            <MonetizationOnIcon className={classes.icon} />
                        )}
                        {icon === 'payment' && <PaymentIcon className={classes.icon} />}

                        {icon === 'credit' && <CreditCardIcon className={classes.icon} />} 
                <Grid container spacing={1} className={classes.benefits}>
                    <Grid item xs={12}>
                        <Typography variant="subtitle1">
                            <CheckCircleOutlineIcon className={classes.checkIcon} />
                            {benefits[0]}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="subtitle1">
                            <CheckCircleOutlineIcon className={classes.checkIcon} />
                            {benefits[1]}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="subtitle1">
                            <CheckCircleOutlineIcon className={classes.checkIcon} />
                            {benefits[2]}
                        </Typography>
                    </Grid>
                </Grid>

            </CardContent>
        </Card>
    );
};

export default Card7;