import React from 'react'
import './New.css'
import shashwath from '../../assets/shashwath-img.jpg'
import Ril from '../Ril/Ril'

const New = () => {
  return (
    <section id="home" className="h">
    <div className="newcomp">
     <img src={shashwath} height="320" width="220" alt=""></img>
     <h1><Ril/></h1>
     <h4>A second year undergrad at MSRIT, currently learning front-end dev and ethical hacking.</h4> 
     <div className="action"></div>
     <div className='s'> <a href="#social-platforms">Contact me</a>
    
     </div>
     </div>
     
     </section>
   
  )
}

export default New
