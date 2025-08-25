import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import profilePic from "../assets/pics/profile-user.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <section className="header">
      <div id="profile">
        <img src={profilePic} alt="Profile" />
        <Link to="/" onClick={closeMenu}>
          <h2 id="ak">AK</h2>
        </Link>
      </div>
      
      {/* Hamburger Menu Button */}
      <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Navigation Menu */}
      <ul id="navbar" className={isMenuOpen ? 'nav-open' : ''}>
        <li><Link to="/" className={isActive('/') ? 'active' : ''} onClick={closeMenu}>Home</Link></li>
        <li><Link to="/skills" className={isActive('/skills') ? 'active' : ''} onClick={closeMenu}>Skills</Link></li>
        <li><Link to="/projects" className={isActive('/projects') ? 'active' : ''} onClick={closeMenu}>Projects</Link></li>
        <li><Link to="/resume" className={isActive('/resume') ? 'active' : ''} onClick={closeMenu}>Resume</Link></li>
        <li><Link to="/contact" className={isActive('/contact') ? 'active' : ''} onClick={closeMenu}>Contact</Link></li>
      </ul>
    </section>
  );
};

export default Navbar;
