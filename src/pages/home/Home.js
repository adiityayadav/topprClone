import React from 'react'

import Block2 from '../../contents/home/block2/Block2'
import Block3 from '../../contents/home/block3/Block3'
import Block4 from '../../contents/home/block4/Block4'
import Block5 from '../../contents/home/block5/Block5'
import Block6 from '../../contents/home/block6/Block6'
import Block7 from '../../contents/home/block7/Block7'
import Block8 from '../../contents/home/block8/Block8'
import Navbar from '../../layout/mainLayout/navbar/Navbar'


const Home = () => {
    
    return (
        <div style={{overflowX:"hidden", overflowY:"hidden"}}>
            {/* Header */}
             <Navbar />
          
          
            {/* content */}
           
            <Block2 />
            <Block3 />
            <Block4 />
            <Block5 />
            <Block6 />
            <Block7 />
           
           
            {/* Footer */}
            <Block8 />
        </div>
    )
}

export default Home
