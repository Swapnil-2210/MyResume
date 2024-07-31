import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CSS/ProjectPage.css'; // Import the CSS module

const ProjectPage = () => {
    const navigate = useNavigate(); // Hook for navigation

    const handleCardClick = () => {
        navigate('/Home'); // Navigate to home page
    };

    return (
        <div className="PJ_container">
            <h1 className="title">Resume Project</h1>
            <div className="card" onClick={handleCardClick}>
                {/* <h1>Resume Project</h1> */}
                <div className="cardInner">
                    <div className="cardFront">
                        <img 
                            src="PJI.jpg" 
                            alt="Project Thumbnail" 
                            className="image"
                        />
                    </div>
                    <div className="cardBack">
                        <h2 className="cardTitle">Project Overview</h2>
                        <p className="cardDescription">
                            This is a React-based Single Page Application (SPA) featuring a navigation panel to access different pages: Home, About, Experience, Projects, and Contact. It utilizes React Router for seamless page transitions and includes a contact form with validation on the Contact Page. Each page is styled for a clean, responsive design, providing an engaging user experience with modular components and interactive elements.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectPage;
