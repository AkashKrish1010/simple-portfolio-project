import React, { use } from "react";
import "../styles.css"; // Assuming your CSS is in the same directory
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from 'react-router-dom';

// Import local images
import profilePic from "../assets/pics/profile-user.png";
import butterflyPic from "../assets/pics/butterfly.png";
import personPic from "../assets/pics/person.jpg";
import Cards from "./Cards";
import About from "./About";

// Component for the Home Page content
const HomePage = () => {
  gsap.registerPlugin(ScrollTrigger) 
  useGSAP(() => {
    
    gsap.from(".card", {
      scrollTrigger: {
        trigger: ".banner", // or any outer container
        start: "top 50%",
        toggleActions: "play reverse play reverse",
        
      },
      duration: 1,
      opacity: 0,
      y: 100,
      stagger: 0.3, // this will animate one card after another
      ease: "power2.out"
    });
    gsap.from("#fly", {
      scrollTrigger: {
        trigger: ".not", // or any outer container
        start: "top 80%",
        toggleActions: "play reverse play reverse",
        
      },
      scale:0,
      duration: 1,
      opacity: 0,
      delay: 0.5,
      y: 100,
      scrub:true,
      pin:true ,// this will animate one card after another
      ease: "power2.out"
    });
    gsap.from("#about ", {
      scrollTrigger: {
        trigger: ".evry", // or any outer container
        
      },
      duration: 1,
      opacity: 0,
      y: 100,
      stagger: 0.5, // this will animate one card after another
      ease: "power2.out"
    });
    gsap.from("#aksh span",{
      duration: 1,
      opacity: 0,
      y: -100,

    })
    gsap.from("#akash", {
      duration: 1,
      opacity: 0,
      x: -100,
      delay: 0.5,
    });
    gsap.from("#Krish", {
      duration: 1,
      opacity: 0,
      y: -100,
      delay: 0.5,
    });
  });

  
  

  const cardData = [
    {
        image: "https://emeritus.org/in/wp-content/uploads/sites/3/2022/10/Technical-Skills_How-to-Them-Master-in-2022.jpg.optimal.jpg",
        title: "Skills",
        description: "A detailed look at the technical and soft skills I’ve honed, equipping me for real-world challenges.",
        link: "/skills",
        linkText: "See More About Skills"
    },
    {
        image: "https://images.squarespace-cdn.com/content/v1/590ecdedc534a56c75a1aab7/1724686022639-6JING80857J9QEI4MP6X/Simats+engineering.jpg?format=2500w",
        title: "Institution",
        description: "I am currently pursuing a BTech in Information Technology (IT) at SIMATS Engineering, Chennai.",
        link: "https://simatsengineering.com",
        linkText: "See More About SIMATS"
    },
    {
        image: "https://sourcebae.com/blog/wp-content/uploads/2023/09/project-planning-header@2x-678x381-1.png",
        title: "Projects",
        description: "A curated portfolio of hands-on experiences and innovative projects demonstrating my ability to solve practical problems.",
        link: "/projects",
        linkText: "See More About Projects"
    }
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
          <li><Link to="/" className="active">Home</Link></li>
          <li><Link to="/resume">Resume</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </section>

      {/* About Section */}
      <div className="evry">
        <div id="aksh">
        <h2 id="akash">AKASH</h2>
        <h2 id="Krish">KRISH</h2>
        </div>
        <div id="about">
          <p>
            IT Engineer passionate about crafting dynamic websites, building intuitive user experiences, and mastering modern technologies.
          </p>
        </div>
      </div>

      {/* Career Foundation */}
      <div className="not">
        <h2>CAREER FOUNDATION</h2>
        <img id="fly" src={butterflyPic} alt="fly" /> 
      </div>

      {/* Cards Section */}
      <div className="banner">
            {cardData.map((data, index) => (
                <Cards key={index}  {...data} />
            ))}
      </div>

      {/* Who is Akash? Section */}
     <About/>

      {/* Contact Section */}
      <h2 id="placeholder"></h2>
      <div className="contact">
        <h3 id="getintouch">Get in Touch</h3>
        <div id="labels">
          <label>
            <input className="inputs" name="first-name" type="text" placeholder="Your name" />
          </label>
          <label>
            <input className="inputs" name="email" type="email" placeholder="Your email" />
          </label>
          <label>
            <textarea className="inputs" name="help" rows="3" placeholder="How can I help?"></textarea>
          </label>
          <div id="sub">
            <button id="submit" onClick={() => console.log('Form submitted!')}>Submit</button>
          </div>
        </div>
      </div>

      {/* Social Media */}
      <h3 id="folow">Follow along</h3>
      <div className="icons">
        <a href="https://www.instagram.com/akxsh_krxsh/" target="_blank" rel="noopener noreferrer"><i className='bx bxl-instagram'></i></a>
        <a href="https://github.com/AkashKrish1010" target="_blank" rel="noopener noreferrer"><i className='bx bxl-github'></i></a>
        <a href="https://www.linkedin.com/in/akash-krish-06390a317/" target="_blank" rel="noopener noreferrer"><i className='bx bxl-linkedin'></i></a>
        <a href="https://x.com" target="_blank" rel="noopener noreferrer"><i className='bx bxl-twitter'></i></a>
      </div>

      {/* Back to Top */}
      <div className="mybtn"><a href="#" id="top">Back to top</a></div>

      {/* Footer */}
      <footer>
        <p>© 2025 Akash_Krish</p>
      </footer>
    </div>
  );
};

export default HomePage;
