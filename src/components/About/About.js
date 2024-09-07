import React, { useState } from 'react'
import './side.css'
import {motion} from 'framer-motion'

const side = () => {
    const [op,setop] = useState(false);


    const variants={
        open:{
            clipPath:"circle(1200at 40px 40px)",
            transition:{
                type:"spring",
                stiffness:20,
            },
        },
        closed:{
            clipPath:"circle(30px at 40px 40px",
            transition:{
                delay:0.5,
                type:"spring",
                stiffness:400,
                damping:40,

            },
        },
    }
  return (
    <motion.div className="sidebar" animate={op? "open" : "closed"}>
        <motion.div className="background" variants={variants}>
         <links/>
    </motion.div>
    <button setop={setop}/>
    </motion.div>
  )
}
