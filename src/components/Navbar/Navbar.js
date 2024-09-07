import React from 'react'
import './Navbar.css'
import Side from '../Side/Side'
import github from '../../assets/github.png'
import linkedin from '../../assets/linkedin.png'
import x from '../../assets/x.png'
import discord from '../../assets/discord.png'

const Navbar = () => {
  return (  
    <div className='navbar'>
      <Side/>
    <div className='wrapper'>
   <span><i>Portfolio</i></span>
   </div>
    <div className="contact-info">
      <a href="https://discordapp.com/users/shash1670/"><img src={discord} height="25"width="25" alt=""/></a>
      <a href="https://www.linkedin.com/in/shashwath-prabhu-1b144827a/"><img src={linkedin}height="25"width="25" alt=""/></a>
      <a href="https://x.com/PrabhuShas26482"><img src={x}height="25"width="25" alt=""/></a>
      <a href="https://github.com/shashwath1278"><img src= {github}height="25"width="25" alt=""/></a>
    </div>
    
    
     </div>
    
  )
}

export default Navbar
