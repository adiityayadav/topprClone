import React from 'react';
import { makeStyles } from '@mui/styles';
import Typography from '@material-ui/core/Typography';
import Grid3 from '../../../components/grids/grid3/Grid3';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    marginTop:" 2vw",
  },
  heading: {
    textAlign: 'center',
    margin: "10px",
    color: "grey"
  },
});
const Block4 = () => {
    const classes = useStyles();

    return (
      <div className={classes.root}>
        <Typography variant="h4" className={classes.heading}>
        India's most awarded edtech platform
  
        </Typography>

        <Grid3 />
        
      </div>
    );
  }
  

export default Block4
