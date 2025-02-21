import React from "react";
import "./stylesi.scss";

const Project = () => {
    const projects = [
        {
            title: "Health Management System",
            description: "A Health Management System with Chatbot is a digital platform that helps users manage their health by tracking vital signs, scheduling appointments, and storing medical records. The integrated chatbot provides 24/7 support, offering symptom checks, medication reminders, and personalized health advice. It also enables users to book virtual consultations with doctors and receive health education content. This system enhances convenience and engagement, making it easier for individuals to manage their health and interact with healthcare providers.",
            link: "https://github.com/achuworks/HealthScooter"
        },
        {
            title: "CIS Benchmark Audit tool",
            description: "Developed an auditing tool for Windows and Linux systems that ensures compliance with CIS benchmarks, enhancing system security posture",
            link: "https://github.com/achuworks/CIS-Audit-Tool"
        },
        {
            title: "Aadhar-queue-management-System",
            description: "The Aadhar Queue Management System streamlines the management of queues in service areas by using Aadhar authentication for secure registration. It assigns tokens, notifies users of their turn, and reduces waiting times, improving efficiency and enhancing the user experience in public service centers.",
            link: "https://github.com/abarna-abu-s/aadhar-queue-management"
        },
        {
            title: "Whatsapp scheduler",
            description: "This is an Automatic Whatsapp Scheduler, a mini project in which I have provided two files: app.py (which uses a database) and tkinterscheduler.py (a GUI showing the status of scheduled messages). You can use either based on your preference. Required packages: pyautogui, mysql-connector-python.",
            link: "https://github.com/achuworks/AutomaticWhatsappScheduler"
        },
        {
            title: "Gamified-Education-Platform",
            description: "A gamified, engaging education platform featuring an interactive dashboard, progress tracker, and more.",
            link: "https://github.com/achuworks/gamified-education-platform"
        }
    ];

    return (
        <div className="projects-container">
            <header className="projects-header">
            <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>My Projects</h1>
            <p style={{ fontSize: "16px" }}>Explore the projects I have worked on.</p>
            </header>

            <div className="projects-grid" style={{ maxHeight: "400px", overflowY: "auto" }}>
                <div className="projects-list">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card" style={{ fontSize: "16px", padding: "15px" }}>
                            <h3 className="project-title" style={{ fontSize: "18px", fontWeight: "bold" }}>{project.title}</h3>
                            <p className="project-description" style={{ fontSize: "14px" }}>{project.description}</p>
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link" style={{ fontSize: "14px", fontWeight: "bold" }}>
                                View Project
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Project;
