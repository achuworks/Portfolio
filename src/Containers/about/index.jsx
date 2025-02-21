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
        Hi, I’m Archana, a passionate cybersecurity explorer in my second year of Computer Science Engineering with a focus on Cyber Security. I’m an enthusiastic learner, an active CTF player (TryHackMe top 2%), and a budding developer aiming to become a skilled Software Development Engineer (SDE).
        </p>
        <p>I participated in HackQuest-2k25 CTF, securing 3rd place in Round 3 and overall 1st position, winning a trophy and ₹10,000 cash prize. Additionally, I won the "Beacons of Brilliance" Award at Hack'24 for designing an interactive learning platform to help students in rural areas.</p>
        <p>
        I'm passionate about security and development, always exploring new tech, building projects, and honing my skills. I thrive on cracking codes, creating secure apps, and collaborating on innovative solutions.
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