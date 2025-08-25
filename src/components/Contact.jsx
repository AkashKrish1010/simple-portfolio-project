import React, { useState } from 'react';
import '../styles/Contact.css';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'akashkrish1010@gmail.com',
      link: 'mailto:akashkrish1010@gmail'
    },
    {
      icon: '📱',
      title: 'Phone',
      value: '+91 7397412080',
      link: 'tel:+91XXXXXXXXX'
    },
    {
      icon: '📍',
      title: 'Location',
      value: 'Chennai, Tamil Nadu',
      link: '#'
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      value: 'Connect with me',
      link: 'https://www.linkedin.com/in/akash-s-6a474336b'
    }
  ];

  return (
    <div>
      <Navbar />
      
      <div className="contact-container">
      <div className="contact-header">
        <h1>Let's Connect & Collaborate</h1>
        <p>Ready to contribute to innovative IT projects and eager to learn from industry professionals</p>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <div className="info-card">
            <h3>🚀 Open to Opportunities</h3>
            <p>As a dedicated IT student, I'm actively seeking internships, entry-level positions, and collaborative projects where I can apply my technical skills and contribute to meaningful solutions.</p>
          </div>

          <div className="contact-methods">
            {contactInfo.map((contact, index) => (
              <a href={contact.link} className="contact-method" key={index}>
                <span className="contact-icon">{contact.icon}</span>
                <div className="contact-details">
                  <h4>{contact.title}</h4>
                  <p>{contact.value}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="availability-card">
            <h3>📅 Availability</h3>
            <div className="availability-item">
              <span className="status-dot available"></span>
              <span>Available for internships and entry-level positions</span>
            </div>
            <div className="availability-item">
              <span className="status-dot available"></span>
              <span>Open to collaborative academic projects</span>
            </div>
            <div className="availability-item">
              <span className="status-dot available"></span>
              <span>Ready for immediate start</span>
            </div>
          </div>
        </div>

        <div className="contact-form-section">
          <div className="form-card">
            <h3>Send me a message</h3>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project, opportunity, or how we can collaborate..."
                  rows="6"
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                <span>Send Message</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13"/>
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Contact;
