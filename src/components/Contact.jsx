import React, { useContext } from 'react'
import { RandomColorContext } from '../components/RandomColor'
import { Mail, MapPin, Linkedin, Github, ExternalLink } from 'lucide-react'

const Contact = () => {
  const primaryColor = useContext(RandomColorContext)
  
  return (
    <div
      id="hanumant jain contact"
      className="w-full max-w-6xl mx-auto text-center p-10 mb-20"
    >
      <h2 className="text-5xl text-center mb-20 font-bold">Get In Touch</h2>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-16 max-w-2xl mx-auto">
        I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div data-aos="fade-up" className="border rounded-2xl py-10 shadow-lg border-neutral-800 hover:shadow-2xl transition-all duration-300 ease-in-out hover:scale-105">
          <div className="flex justify-center mb-4">
            <Mail className="w-8 h-8" style={{ color: primaryColor }} />
          </div>
          <h3 className="text-lg font-semibold mb-2">Email</h3>
          <p className="text-lg hover:underline">
            <a href="mailto:hanumantjain939@gmail.com" style={{ color: primaryColor }} className="flex items-center justify-center gap-2">
              hanumantjain939@gmail.com
              <ExternalLink className="w-4 h-4" />
            </a>
          </p>
        </div>
        
        <div data-aos="fade-up" className="border rounded-2xl py-10 shadow-lg border-neutral-800 hover:shadow-2xl transition-all duration-300 ease-in-out hover:scale-105">
          <div className="flex justify-center mb-4">
            <MapPin className="w-8 h-8" style={{ color: primaryColor }} />
          </div>
          <h3 className="text-lg font-semibold mb-2">Location</h3>
          <p className="text-lg" style={{ color: primaryColor }}>
            Washington, DC
          </p>
        </div>
        
        <div data-aos="fade-up" className="border rounded-2xl py-10 shadow-lg border-neutral-800 hover:shadow-2xl transition-all duration-300 ease-in-out hover:scale-105">
          <div className="flex justify-center mb-4">
            <Linkedin className="w-8 h-8" style={{ color: primaryColor }} />
          </div>
          <h3 className="text-lg font-semibold mb-2">LinkedIn</h3>
          <p className="text-lg hover:underline">
            <a
              href="https://www.linkedin.com/in/hanumant-jain/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: primaryColor }}
              className="flex items-center justify-center gap-2"
            >
              Hanumant Jain
              <ExternalLink className="w-4 h-4" />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
