import React from 'react'
import './New.css'
import shash1 from '../../assets/shash1.png'
import Ril from '../Ril/Ril'

const New = () => {
  return (
    <section id="home" className="h">
    <div className="newcomp">
     <img src={shash1} height="300" width="300" alt=""></img>
     <h1><Ril/></h1>
     <p><h4>A second year undergrad at MSRIT, currently learning front-end dev and ethical hacking.</h4> </p>
     <div className="action"></div>
     <div className='s'>Contact me</div>
     </div>
     </section>
   
  )
}

export default New
