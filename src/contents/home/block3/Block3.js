import React from 'react';
import { makeStyles } from '@mui/styles';
import Typography from '@material-ui/core/Typography';
import Grid2 from '../../../components/grids/grid2/Grid2';

const useStyles = makeStyles({
  card: {
    backgroundColor: 'lightgray',
    padding: '16px',
  },
});

function Block3() {
  const classes = useStyles();

  return (
    <>
    <Typography variant="h2" style={{ fontWeight: 'bold', margin:"3vw", textAlign: "center" }}>
Our plans for competitive exams
</Typography>


      <Grid2 /> 


      
    </>
  )
};

export default Block3;
