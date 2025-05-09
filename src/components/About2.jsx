import React, { useContext } from 'react'
import { RandomColorContext } from '../components/RandomColor'

const About = () => {
  const primaryColor = useContext(RandomColorContext)

  return (
    <div id='hanumant jain about' className='w-full max-w-6xl mx-auto text-lg py-20 px-10'>
      <h2 className="text-5xl text-center mb-20 font-bold">
        About Me
      </h2>
      <div data-aos="fade-up" className="space-y-6 leading-relaxed">
        <p>
          I’ve broken more things than I’ve built — and that’s exactly how I learned to build them right.
        </p>
        <p>
          Hi, I’m <span className="font-semibold" style={{ color: primaryColor }}>Hanumant Jain</span> — a full-stack developer and cloud enthusiast passionate about building scalable, user-centric digital solutions.
        </p>
        <p>
          I hold a Master's in Computer Science from The George Washington University and a Bachelor's in Computer Engineering from Pune University. My journey into tech has been hands-on and curiosity-driven, from exploring cloud computing and DevOps to designing full-fledged web applications.
        </p>
        <p>
          Currently, I’m working as a Student Project Assistant at GWU, where I’m improving accessibility and maintainability of research platforms using React, JavaScript, and modern front-end practices. My past experiences include developing real-world solutions like <span style={{ color: primaryColor }} className="font-semibold">MedCompass</span>, a voice-based patient follow-up platform built with Flask, Twilio, and MongoDB, and leading the creation of a <span style={{ color: primaryColor }} className="font-semibold">Web-Based Shoe Store</span> using React, Redux, and PostgreSQL.
        </p>
        <p>
          Whether it’s backend APIs, front-end UX, or DevOps automation—I thrive on turning complex problems into clean, efficient code. 🚀
        </p>
      </div>
      {/* <div>
        <a href="https://github.com/hanumantjain">Github</a>
        <a href="https://www.linkedin.com/in/hanumant-jain/">Linkedin</a>
      </div> */}
    </div>
  );
};

export default About;
