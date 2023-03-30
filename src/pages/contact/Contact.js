import { Box } from '@mui/system'
import React from 'react'
import Block1 from '../../contents/contact/block1/Block1'
import Block7 from '../../contents/home/block7/Block7'
import Block8 from '../../contents/home/block8/Block8'
import Navbar from '../../layout/mainLayout/navbar/Navbar'

const Contact = () => {
  return (
    <Box>
      <Navbar />
      <Block1 />
      <Block7 />
      <Block8 />
    </Box>
  )
}

export default Contact
