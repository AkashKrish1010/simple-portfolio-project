import React from 'react';
import '../styles/Projects.css';
import { Link } from 'react-router-dom';
import profilePic from '../assets/pics/profile-user.png';

const Projects = () => {
  const projectData = [
    {
      title: 'Student Management System',
      description: 'A comprehensive web-based system for managing student records, built with Python and Oracle database. Features include student registration, grade management, and report generation.',
      technologies: ['Python', 'Oracle SQL', 'HTML/CSS'],
      status: 'Academic Project',
      icon: '🎓',
      link: '#',
    },
    {
      title: 'Personal Portfolio Website',
      description: 'Modern, responsive portfolio website showcasing technical skills and projects. Built with React and featuring interactive UI components and smooth animations.',
      technologies: ['React', 'CSS3', 'JavaScript'],
      status: 'Personal Project',
      icon: '💼',
      link: '#',
    },
    {
      title: 'Database Design Project',
      description: 'Designed and implemented a normalized database schema for a library management system. Includes complex queries, stored procedures, and data analysis.',
      technologies: ['Oracle SQL', 'Database Design', 'Data Analysis'],
      status: 'Academic Project',
      icon: '🗄️',
      link: '#',
    },
    {
      title: 'Research Analysis Tool',
      description: 'Python-based tool for conducting research data analysis and generating insights. Demonstrates problem-solving skills and analytical thinking capabilities.',
      technologies: ['Python', 'Data Analysis', 'Research Methods'],
      status: 'Research Project',
      icon: '📊',
      link: '#',
    },
  ];

  return (
    <div>
      <section className="header">
        <div id="profile">
          <img src={profilePic} alt="Profile" />
          <Link to="/">
            <h2 id="ak">AK</h2>
          </Link>
        </div>
        <ul id="navbar">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/projects" className="active">Projects</Link></li>
          <li><Link to="/resume">Resume</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </section>
      
      <div className="projects-container">
      <div className="projects-header">
        <h1>Academic & Personal Projects</h1>
        <p>Showcasing practical application of technical skills through innovative projects</p>
      </div>
      
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-icon">
              {project.icon}
            </div>
            <div className="project-content">
              <div className="project-status">{project.status}</div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              
              <div className="project-technologies">
                {project.technologies.map((tech, techIndex) => (
                  <span className="tech-tag" key={techIndex}>{tech}</span>
                ))}
              </div>
              
              <div className="project-actions">
                <a href={project.link} className="project-link">
                  <span>View Details</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M17 7H7M17 7V17"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="projects-cta">
        <div className="cta-card">
          <h3>🚀 Ready for New Challenges</h3>
          <p>Eager to contribute to real-world projects and collaborate on innovative IT solutions. Let's build something amazing together!</p>
          <button className="cta-button">Get In Touch</button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Projects;
