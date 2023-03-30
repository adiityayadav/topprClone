import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Card7 from '../../../components/card/card7/Card7'
import Grid13 from '../../../components/grids/grid13/Grid13'

const Block2 = () => {
  return (
    <Box>
 <Typography   sx={{ fontWeight: 'bold', margin:"3vw", textAlign: "center",fontSize: { xs: 25, sm: 32, md: 38} , color:"gray"}}>        Available Payment options</Typography>
    <Grid13 />
    </Box>
  )
}
// title, price, icon, benefits
export default Block2
