import { Box } from '@mui/material'
import React from 'react'
import Block4 from '../../contents/home/block4/Block4'
import Block7 from '../../contents/home/block7/Block7'

import Block8 from '../../contents/home/block8/Block8'
import Block1 from '../../contents/pricing/block1/Block1'
import Block2 from '../../contents/pricing/block2/Block2'
import Navbar from '../../layout/mainLayout/navbar/Navbar'

const Pricing = () => {
  return (
    <Box>
       <Navbar />
       <Block1 />
       <Block2 />
       <Block4 />
       <Block7 />
       <Block8 />

    </Box>
  )
}

export default Pricing
