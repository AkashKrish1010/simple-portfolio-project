import React from 'react';
import '../styles/Resume.css';
import { Link } from 'react-router-dom';
import profilePic from '../assets/pics/profile-user.png';

const Resume = () => {
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
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/resume" className="active">Resume</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </section>
      
      <div className="resume-container">
      <div className="resume-header">
        <h1>Professional Resume</h1>
        <p>Comprehensive overview of academic achievements, technical skills, and career aspirations</p>
      </div>

      <div className="resume-content">
        <div className="resume-main">
          <div className="resume-section">
            <div className="section-header">
              <span className="section-icon">📋</span>
              <h2>Professional Summary</h2>
            </div>
            <div className="section-content">
              <p>
                Dedicated and highly motivated Information Technology student pursuing a bachelor's degree at SIMATS Engineering College, Chennai. 
                Proficient in Python, Oracle, HTML, and CSS with demonstrated ability conducting research and developing innovative IT solutions. 
                Strong problem-solving skills, complemented by critical thinking abilities, enabling effective analysis and resolution of complex challenges. 
                Eager to contribute to technology-driven projects and gain hands-on experience in the IT industry.
              </p>
            </div>
          </div>

          <div className="resume-section">
            <div className="section-header">
              <span className="section-icon">🎓</span>
              <h2>Education</h2>
            </div>
            <div className="section-content">
              <div className="education-item">
                <div className="education-header">
                  <h3>Bachelor of Technology in Information Technology</h3>
                  <span className="education-status">In Progress</span>
                </div>
                <div className="education-details">
                  <p className="institution">SIMATS Engineering College, Chennai</p>
                  <p className="education-description">
                    Comprehensive curriculum covering software development, database management, 
                    web technologies, and system analysis. Focus on practical application of 
                    theoretical concepts through hands-on projects and research initiatives.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="resume-section">
            <div className="section-header">
              <span className="section-icon">💻</span>
              <h2>Technical Skills</h2>
            </div>
            <div className="section-content">
              <div className="skills-categories">
                <div className="skill-category">
                  <h4>Programming Languages</h4>
                  <div className="skill-tags">
                    <span className="skill-tag primary">Python</span>
                    <span className="skill-tag">HTML</span>
                    <span className="skill-tag">CSS</span>
                  </div>
                </div>
                <div className="skill-category">
                  <h4>Database Management</h4>
                  <div className="skill-tags">
                    <span className="skill-tag primary">Oracle SQL Specialist</span>
                    <span className="skill-tag">Database Design</span>
                  </div>
                </div>
                <div className="skill-category">
                  <h4>Web Development</h4>
                  <div className="skill-tags">
                    <span className="skill-tag">HTML</span>
                    <span className="skill-tag">CSS</span>
                    <span className="skill-tag">Responsive Design</span>
                  </div>
                </div>
                <div className="skill-category">
                  <h4>Core Competencies</h4>
                  <div className="skill-tags">
                    <span className="skill-tag">Research & Analytical Skills</span>
                    <span className="skill-tag">Critical Thinking & Problem Solving</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="resume-section">
            <div className="section-header">
              <span className="section-icon">💼</span>
              <h2>Experience</h2>
            </div>
            <div className="section-content">
              <div className="experience-item">
                <div className="experience-header">
                  <h3>Fresher - Ready for Industry Entry</h3>
                  <span className="experience-status">Available Now</span>
                </div>
                <div className="experience-details">
                  <p>
                    No formal work experience yet, but eager to apply academic knowledge in real-world scenarios. 
                    Demonstrated commitment to learning through academic projects, research initiatives, and 
                    continuous skill development. Ready to contribute fresh perspectives and innovative solutions 
                    to technology-driven organizations.
                  </p>
                  <div className="experience-highlights">
                    <div className="highlight-item">
                      <span className="highlight-icon">🎯</span>
                      <span>Strong academic foundation in IT principles</span>
                    </div>
                    <div className="highlight-item">
                      <span className="highlight-icon">🚀</span>
                      <span>Passionate about emerging technologies</span>
                    </div>
                    <div className="highlight-item">
                      <span className="highlight-icon">🤝</span>
                      <span>Excellent collaboration and communication skills</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="resume-sidebar">
          <div className="sidebar-section">
            <h3>🎯 Career Objectives</h3>
            <ul>
              <li>Secure an entry-level IT position</li>
              <li>Contribute to innovative technology projects</li>
              <li>Develop expertise in software development</li>
              <li>Build a strong professional network</li>
            </ul>
          </div>

          <div className="sidebar-section">
            <h3>🏆 Key Strengths</h3>
            <div className="strengths-list">
              <div className="strength-item">
                <span className="strength-icon">🧠</span>
                <span>Analytical Thinking</span>
              </div>
              <div className="strength-item">
                <span className="strength-icon">🔍</span>
                <span>Research Skills</span>
              </div>
              <div className="strength-item">
                <span className="strength-icon">⚡</span>
                <span>Quick Learner</span>
              </div>
              <div className="strength-item">
                <span className="strength-icon">🎯</span>
                <span>Detail-Oriented</span>
              </div>
            </div>
          </div>

          <div className="sidebar-section">
            <h3>📚 Learning Focus</h3>
            <div className="learning-items">
              <span className="learning-tag">Advanced Python</span>
              <span className="learning-tag">Cloud Computing</span>
              <span className="learning-tag">Machine Learning</span>
              <span className="learning-tag">DevOps</span>
            </div>
          </div>
        </div>
      </div>

      <div className="resume-actions">
        <a href="/resume.pdf" download className="download-btn primary">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7,10 12,15 17,10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          <span>Download Resume</span>
        </a>
        <button className="contact-btn">
          <span>Get In Touch</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M7 17L17 7M17 7H7M17 7V17"/>
          </svg>
        </button>
      </div>
      </div>
    </div>
  );
};

export default Resume;
