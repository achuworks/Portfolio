import React from "react";
import "./stylesa.scss";
import { FaLock, FaDatabase, FaLaptopCode, FaCode } from "react-icons/fa";

const About = () => {
  return (
    <div className="about-container">
      <div className="content">
        <h1 className="title">About Me!!</h1>
        <h2 className="subtitle">Cyber Security Enthusiast</h2>
        <p>
          Hi, I’m Archana, a passionate cybersecurity explorer,currently in my second year of pursuing a degree in Computer Science Engineering with a specialization in Cyber Security, enthusiastic
          learner, and an active CTF player (TryHackMe top 7%) with a knack for
          solving complex challenges. I’m also a developer in progress, diving
          deep into the exciting world of software development, and an aspiring
          full-stack developer with a goal to become a skilled Software
          Development Engineer (SDE).
        </p>
        <p>
          With a strong interest in the intersection of security and
          development, I’m constantly exploring new technologies, building
          projects, and honing my skills to tackle real-world problems. Whether
          it’s cracking codes in CTFs, creating secure and efficient
          applications, or collaborating on innovative solutions, I thrive on
          pushing boundaries and growing with every challenge.
        </p>
        <p className="e-mail">achuworks2005@gmail.com</p>
      </div>
      <div className="rotating-globe">
        <div className="icon-container">
          <FaLock className="icon" data-position="top"/>
          <FaDatabase className="icon" data-position="right"/>
          <FaLaptopCode className="icon" data-position="left"/>
          <FaCode className="icon" data-position="bottom"/>
        </div>
      </div>
    </div>
  );
};

export default About;