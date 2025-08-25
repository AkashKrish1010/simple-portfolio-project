import React from 'react';
import '../styles/Skills.css';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Skills = () => {
  const skillsData = [
    {
      category: "Programming Languages",
      icon: "💻",
      skills: ["Python", "HTML", "CSS", "JavaScript"],
      color: "#4CAF50"
    },
    {
      category: "Database Management",
      icon: "🗄️",
      skills: ["Oracle SQL", "MySQL", "Database Design"],
      color: "#2196F3"
    },
    {
      category: "Web Development",
      icon: "🌐",
      skills: ["HTML5", "CSS3", "Responsive Design", "React"],
      color: "#FF9800"
    },
    {
      category: "Core Skills",
      icon: "🧠",
      skills: ["Critical Thinking", "Problem Solving", "Research & Analysis", "Innovation"],
      color: "#9C27B0"
    }
  ];

  return (
    <div>
      <Navbar />
      
      <div className="skills-container">
      <div className="skills-header">
        <h1>Technical Skills & Expertise</h1>
        <p>Comprehensive skill set developed through academic learning and hands-on practice</p>
      </div>
      
      <div className="skills-grid">
        {skillsData.map((skillGroup, index) => (
          <div className="skill-card" key={index} style={{'--accent-color': skillGroup.color}}>
            <div className="skill-header">
              <span className="skill-icon">{skillGroup.icon}</span>
              <h3>{skillGroup.category}</h3>
            </div>
            <div className="skills-list">
              {skillGroup.skills.map((skill, skillIndex) => (
                <div className="skill-item" key={skillIndex}>
                  <span className="skill-name">{skill}</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{width: `${85 - skillIndex * 5}%`}}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="skills-summary">
        <div className="summary-card">
          <h3>🎯 Learning Focus</h3>
          <p>Currently expanding knowledge in advanced Python frameworks, cloud technologies, and modern web development practices.</p>
        </div>
        <div className="summary-card">
          <h3>🚀 Goals</h3>
          <p>Seeking opportunities to apply academic knowledge in real-world IT projects and contribute to innovative technology solutions.</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Skills;
