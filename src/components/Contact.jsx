import React, { useContext } from 'react'
import { RandomColorContext } from '../components/RandomColor'

const Contact = () => {
  const primaryColor = useContext(RandomColorContext)
  
  return (
    <div
      id="hanumant jain contact"
      className="w-full max-w-6xl mx-auto text-center p-10 mb-20"
    >
      <h2 className="text-5xl text-center mb-20 font-bold">Contact</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        <div data-aos="fade-up" className="border rounded-2xl py-10 shadow-lg border-neutral-800 hover:shadow-2xl transition-shadow duration-300 ease-in-out">
          <h3 className="text-lg font-semibold">E-mail</h3>
          <p className="text-lg hover:underline">
            <a href="mailto:hanumantjain939@gmail.com" style={{ color: primaryColor }}>hanumantjain939@gmail.com</a>
          </p>
        </div>
        <div data-aos="fade-up" className="border rounded-2xl py-10 shadow-lg border-neutral-800 hover:shadow-2xl transition-shadow duration-300 ease-in-out">
          <h3 className="text-lg font-semibold">Location</h3>
          <p className="text-lg" style={{ color: primaryColor }}>
            Washington, DC
          </p>
        </div>
        <div data-aos="fade-up" className="border rounded-2xl py-10 shadow-lg border-neutral-800 hover:shadow-2xl transition-shadow duration-300 ease-in-out">
          <h3 className="text-lg font-semibold">LinkedIn</h3>
          <p className="text-lg hover:underline">
          <a
              href="https://www.linkedin.com/in/hanumant-jain/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: primaryColor }}
            >
              Hanumant Jain
            </a>
          </p>
        </div>
      </div>  
    </div>
  );
};

export default Contact;
