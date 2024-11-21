import React from "react";
import './stylesh.scss';
const Home=()=>{
    const download=()=>{
        const link=document.createElement('a');
            link.href="/ArchanaResume.pdf";
            link.download="ArchanaResume.pdf";
            link.click();
        
    };
    return(
        <div className="home-container">
            <h1 className="main-title">Hello, I'm Archana.</h1>
            <h2 className="sub-title">Cyber Security Explorer | Developer in progress</h2>
            <div className="buttons">
            <button className="hire">Hire Me</button> <button className="resume" onClick={download}>Download Resume</button>
            <a  href="/ArchanaResume.pdf" 
                    download="ArchanaResume.pdf" 
                    className="resume">.</a>
            </div>
            <div className="social-links">
                <a href="https://www.linkedin.com/in/archana-saravanan-/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://tryhackme.com/r/p/Archana005" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-hat-wizard"></i>
                </a>
                <a href="https://github.com/achuworks" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i>
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram"></i>
                </a>
            </div>
        </div>
    );
};
export default Home;