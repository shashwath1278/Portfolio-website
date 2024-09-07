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
      <div className="skills-header">
        
        <h1><b>Skills</b></h1>
        <br></br>
        <p><b><h2>Programming languages:</h2> </b><br></br>
        Java, Python, HTML, CSS, Javascript, C, C++</p>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
         <p><b><h2>Some libraries and frameworks used by me: </h2></b><br></br> React.js, bootstrap, Tailwind CSS</p>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
         <p><b><h2>Tools used by me:</h2> </b><br></br>VS code, Github, Docker, Kali linux, Terminal</p>
        
      </div>
      <div className="skills-images">
      <br></br>
      <br></br>
        <div className="sec1">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <img src={HTML} alt="HTML" height="50px"width="50px" />
        <img src={CSS} alt="CSS"height="50px"width="50px" />
        <img src={JS} alt="JavaScript" height="50px"width="50px"/>
        <img src={Java} alt="Java"height="50px"width="50px" />
        <img src={Python} alt="Python"height="50px"width="50px" />
        <img src={C} alt="C" height="50px"width="50px"/>
        <img src={Cplus} alt="C++"height="50px"width="50px" />
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        
        <div className="sec2">
        &nbsp;&nbsp;&nbsp;&nbsp;
        <img src={Reactjs} alt="React.js"height="50px"width="50px" />

        <img src={tailwindcss} alt="Tailwind CSS"height="50px"width="50px" />
        <img src={bootstrap} alt="Bootstrap"height="50px"width="50px" />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br><br></br>
        
        </div>
        <div className="sec3">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <img src={vscode} alt="vscode"height="50px"width="50px" />
        <img src={docker} alt="docker"height="50px"width="50px" />
        <img src={github} alt="github"height="50px"width="50px" />
        <img src={kali} alt="kali_linux"height="50px"width="50px" />
        <div/>

        
        </div>
      </div>
    </section>
  );
}

export default Skills;

