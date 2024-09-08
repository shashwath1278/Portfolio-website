import React from 'react';
import './Skills.css';
import HTML from '../../assets/HTML.png';
import CSS from '../../assets/css.png';
import JS from '../../assets/js.jpg';
import Java from '../../assets/java.png';
import Python from '../../assets/python.png';
import C from '../../assets/c.png';
import Cplus from '../../assets/c++.png';
import Reactjs from '../../assets/reactjs.png';
import tailwindcss from '../../assets/tailwindcss.png';
import bootstrap from '../../assets/bootstrap.jpg';
import kali from '../../assets/kali.jpg';
import docker from '../../assets/docker.png';
import vscode from '../../assets/VScode.jpg';
import github from '../../assets/github.png';


const Skills = () => {
  return (
    <section id="skills" className="sk">
     
      <div className="skills-images">

      <h1><b>Skills</b></h1>
     
       
        <div className="sec1">
        <h2>Programming languages:</h2> <br></br>
        Java, Python, HTML, CSS, Javascript, C, C++
        <br/><br></br>
        
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <img src={HTML} alt="HTML" height="65px"width="65px" />
        <img src={CSS} alt="CSS"height="65px"width="65px" />
        <img src={JS} alt="JavaScript" height="65px"width="65px"/>
        <img src={Java} alt="Java"height="65px"width="65px" />
        <img src={Python} alt="Python"height="65px"width="65px" />
        <img src={C} alt="C" height="65px"width="65px"/>
        <img src={Cplus} alt="C++"height="65px"width="65px" />
        </div>
      
        <br/>
        <div className="sec2">
       
         <p><b><h2>Some libraries and frameworks used by me: </h2></b><br></br> React.js, bootstrap, Tailwind CSS</p>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <br/>
      
        <img src={Reactjs} alt="React.js"height="65px"width="65px" />

        <img src={tailwindcss} alt="Tailwind CSS"height="65px"width="65px" />
        <img src={bootstrap} alt="Bootstrap"height="65px"width="65px" />
    
        <br></br>
        
        </div>
        <br/>
        <div className="sec3">
      
         <p><b><h2>Tools used by me:</h2> </b><br></br>VS code, Github, Docker, Kali linux, Terminal</p>
         <br/>
        
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <img src={vscode} alt="vscode"height="65px"width="65px" />
        <img src={docker} alt="docker"height="65px"width="65px" />
        <img src={github} alt="github"height="65px"width="65px" />
        <img src={kali} alt="kali_linux"height="65px"width="65px" />
        <div/>

        
        </div>
      </div>
    </section>
  );
}

export default Skills;

