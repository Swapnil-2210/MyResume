import React from 'react';
import './CSS/ExperiencePage.css'

const ExperiecncePage = () => {
    return (
        <>
        <div className="experience-container">
        <h2 className="experience-title">Work Experience</h2>
        <div className="experience-item">
          <h3 className="experience-role">Frontend Developer</h3>
          <span className="experience-company">Nebula Technology</span>
          <span className="experience-date">Feb 2023 - Present</span>
          <ul className="experience-details">
            <li>Developed Responsive Web Applications: Built and maintained user-friendly, responsive web applications using HTML5, CSS3, and JavaScript, ensuring compatibility across multiple devices and browsers.</li>
            <li> Libraries: Utilized React.js for dynamic and interactive user interfaces. Implemented Redux for state management.</li>
            <li>User Experience Improvement: Contributed to a redesign project that improved user satisfaction scores by 25%, based on user feedback and analytics.</li>
            <li>UI/UX Design Implementation: Collaborated with UI/UX designers to translate designs into high-quality code, ensuring a seamless and engaging user experience</li>
          </ul>
        </div>
        {/* <div className="experience-item">
          <h3 className="experience-role">Technical Intern</h3>
          <span className="experience-company">AT&T</span>
          <span className="experience-date">Jan 2023 - March 2023</span>
          <ul className="experience-details">
            <li>Gained experience with Git version control contributing to the development and maintenance of code repositories.</li>
            <li>Worked on the application dashboard, assisting 1,000+ users.</li>
          </ul>
        </div> */}
      </div>
      </>
    );
}

export default ExperiecncePage;
