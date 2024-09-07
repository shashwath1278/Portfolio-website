import React from 'react'
import './index.css'
import Navbar from './components/Navbar/Navbar' 
import New from './components/New/New'
import Aboutme from './components/Aboutme/Aboutme'
import Skills from './components/Skills/Skills'
import Socials from './components/Socials/Socials'
import Contact from './components/Contact/Contact'

{/*import Body from './components/Body/Body'*/}

 

//import Ril from './components/Ril/Ril' 


const App = () => {
  return (
  
   <div className="fullwidth-bg" >
  
    <section id="nav"><Navbar/></section>
    <section id="home"><New/></section>
    <section id="about-me"><Aboutme/></section>
    <section id="skills"><Skills/></section>
    <section id="contact me"><Socials/></section>
    <section id="social-platforms"><Contact/></section>
     </div>

  )
}

export default App
