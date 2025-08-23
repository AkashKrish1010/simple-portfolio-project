import React from 'react'
import person_pic from "../assets/pics/person.jpg";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from 'gsap';

const About = () => {
    gsap.registerPlugin(ScrollTrigger);
useGSAP(() => {
    gsap.from("#person", {
        scrollTrigger: {
            trigger: ".alone",
            toggleActions: "play reverse play reverse"
        },
        duration: 1,
        opacity: 0,
        x: -50,
        delay: 0.5,
        ease: "power2.in"
    });

    gsap.from("#para2", {
        scrollTrigger: {
            trigger: ".alone",
            toggleActions: "play reverse play reverse",
        },
        duration: 1,
        opacity: 0,
        x: -50,
        delay: 0.5,
        ease: "power2.inOut"
        
    });

    gsap.from("#para3", {
        scrollTrigger: {
            trigger: ".alone",
            toggleActions: "play reverse play reverse"
        },
        duration: 1,
        opacity: 0,
        x: 100,
        delay: 0.5,
        ease: "power2.inOut"
    });

    gsap.from("#para1", {
        scrollTrigger: {
            trigger: ".alone",
            toggleActions: "play reverse play reverse"
        },
        duration: 1,
        opacity: 0,
        x: 100,
        delay: 0.5,
        ease: "power2.inOut"
    });
},[]);

    return (
        <div>
            <h3 id="myself">Who is Akash?</h3>
            <div className="alone">
                <img id="person" src={person_pic} alt="person"/>
                    <div className="text-container">
                        <p id="para1">Akash.S is an aspiring engineer, currently pursuing his passion at SIMATS
                            Engineering College in Chennai.He is a tech enthusiast, a budding engineer, and a passionate
                            learner.
                            He's got a curious mind and a thirst for knowledge, so keep your eye out for his future innovations.
                            You
                            might just be surprised!</p>
                        <p id="para2">With a curious mind and a thirst for knowledge, he dives into coding, problem-solving, and
                            bringing creative ideas to life. Whether it’s experimenting with new technologies or collaborating
                            on exciting projects, Akash is on a mission to make a difference. </p>
                        <p id="para3">Beyond academics, Akash enjoys exploring opportunities to connect with like-minded
                            individuals. He’s happy to collaborate with anyone in the fields of education, activism, or
                            entertainment So Hit me up ASAP.</p>
                        <a href="#placeholder" className="btn1">get in touch </a>
                    </div>
            </div>
        </div>
    )
}

export default About;