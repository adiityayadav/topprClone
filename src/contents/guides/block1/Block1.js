import { Box  } from '@material-ui/core'
import { Typography } from '@mui/material'
import React from 'react'
import SubjectGrid from '../../../components/grids/grid6/Grid6'

const Block1 = () => {
  return (
    <Box>
        <Typography sx={{margin:"2vw", }} variant='h4'>Subjects</Typography> 
        <SubjectGrid /> 
    </Box>
  )
}

export default Block1
