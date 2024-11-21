import React from "react";
import './stylesi.scss'; 

const Project = () => {
    const projects = [
        {
            title: "Health Management System",
            description: "A Health Management System with Chatbot is a digital platform that helps users manage their health by tracking vital signs, scheduling appointments, and storing medical records. The integrated chatbot provides 24/7 support, offering symptom checks, medication reminders, and personalized health advice. It also enables users to book virtual consultations with doctors and receive health education content. This system enhances convenience and engagement, making it easier for individuals to manage their health and interact with healthcare providers.",
            link: "https://github.com/achuworks/HealthScooter"
        },
        {
            title: "CIS Benchmark Audit tool",
            description: "Developed an auditing tool for Windows and Linux systems that ensures compliance with CIS benchmarks,enhancing system security posture",
            link: "https://github.com/quixel200/solid-umbrella"
        },
        {
            title: "Aadhar-queue-management-System",
            description: "The Aadhar Queue Management System streamlines the management of queues in service areas by using Aadhar authentication for secure registration. It assigns tokens, notifies users of their turn, and reduces waiting times, improving efficiency and enhancing the user experience in public service centers.",
            link: "https://github.com/abarna-abu-s/aadhar-queue-management"
        },
        {
            title:"Insight-AI:AI for truth broadcasting",
            description:"AI for Truth Broadcasting leverages artificial intelligence to identify, verify, and disseminate accurate information across platforms. By analyzing data, detecting misinformation, and providing fact-checked content in real-time, it ensures reliable communication, combats fake news, and promotes trust in information sharing.",
            link:"https://github.com/liyander/Insight-ai"
        }
  
    ];

    return (
        <div className="projects-container">
            <header className="projects-header">
                <h1>My Projects</h1>
                <p>Explore the projects I have worked on.</p>
            </header>

            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <h3 className="project-title">{project.title}</h3>
                        <p className="project-description">{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                            View Project
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Project;
