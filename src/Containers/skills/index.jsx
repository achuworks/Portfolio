import React from "react";
import "./styless.scss";
import JS from './javascript.svg'
import eact from './react.svg'
import Html from './html5.svg'
import CSS from './css-3.png'
import Mongo from './mongodb.svg'
import Bootstrap from './bootstrap.svg'
import firebase from './firebase.svg'
import linux from './linux-logo.png'
import net from './globe-grid.png'
import Python from './python.svg'
import Java from './java.png'
import C from './c.svg'
import SQL from './sql-server.png'
import aws from './aws.png'
import thm from './thm.png'
import ctf from './CTF.png'
import htb from './htb.png'
import figma from './figma.png'

const skillsData = {
  "Front-end": [
    { name: "JavaScript", logo: JS },
    { name: "React", logo: eact},
    { name: "HTML", logo: Html },
    { name: "CSS", logo: CSS},
    { name: "Mongo", logo: Mongo},
    { name: "Firebase", logo: firebase },
    { name: "Linux", logo: linux },
    { name: "Bootstrap", logo: Bootstrap },
  ],
  "Back-end": [
    { name: "Networking", logo: net },
    { name: "Python", logo: Python},
    { name: "Java", logo: Java },
    {name:"C",logo:C},
    {name:"SQL",logo:SQL},
    {name:"Cloud",logo:aws},
    { name: "Figma", logo: figma },

  ],
  Other: [
    { name: "TryHackMe", logo: thm },
    { name: "CTF", logo: ctf },
    { name: "HackTheBox", logo: htb },
   
  ],
 
};

const Skills = () => {
  return (
    <div className="skills-page">
      <h1>SKILLS</h1>
      {Object.entries(skillsData).map(([category, skills]) => (
        <div key={category} className="skills-category">
          <h2>{category}</h2>
          <div className="skills-icons">
            {skills.map((skill) => (
              <div key={skill.name} className="skill">
                <img src={skill.logo} alt={skill.name} />
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
