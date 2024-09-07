import React from 'react'
import './Contact.css'
import Side from '../Side/Side'
import github from '../../assets/github.png'
import linkedin from '../../assets/linkedin.png'
import x from '../../assets/x.png'
import discord from '../../assets/discord.png'
import reddit from '../../assets/reddit.jpg'

const Contact = () => {
  return (  
    <section id="social-platforms">
    <div className='c'>
    <div className='wpl'>
   </div>
   <h1>Contact me on these social platforms</h1>
   <br/>
   <br/>
   <br/>
    <div className="conts">
      <a href="https://discordapp.com/users/shash1670/"><img src={discord} height="25"width="25" alt=""/></a>
      <a href="https://www.linkedin.com/in/shashwath-prabhu-1b144827a/"><img src={linkedin}height="25"width="25" alt=""/></a>
      <a href="https://x.com/PrabhuShas26482"><img src={x}height="25"width="25" alt=""/></a>
      <a href="https://github.com/shashwath1278"><img src= {github}height="25"width="25" alt=""/></a>
      <a href="https://www.reddit.com/user/Ok-Flight9847/"><img src= {reddit}height="25"width="25" alt=""/></a>
    </div>
    
   
     </div>
     </section>
    
  )
}

export default Contact
