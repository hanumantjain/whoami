import React, { useContext } from 'react'
import { RandomColorContext } from '../components/RandomColor'

const About = () => {
  const primaryColor = useContext(RandomColorContext)

  return (
    <div id='hanumant jain about' className='w-full max-w-6xl mx-auto text-lg py-20 px-10'>
      <h2 className="text-5xl text-center mb-20 font-bold">About</h2>
      <div className='flex flex-col md:flex-row justify-center w-full gap-8'>
        <div className='md:w-1/2 pr-4'>
          <p data-aos="fade-up">
            I’m <span style={{ color: primaryColor }}>Hanumant Jain</span>, a Computer
            Science graduate student at George Washington University,
            passionate about building innovative web and blockchain-based 
            solutions.
          </p>
          <p data-aos="fade-up" className='mt-4'>
            With hands-on experience in full-stack development,
            smart contracts, and cloud technologies,
            I love turning ideas into real-world applications.
          </p>
        </div>
        <div className='md:w-1/2'>
          <div data-aos="fade-up" className='mb-4'>
            <h4 className='text-2xl font-bold ' style={{ color: primaryColor }}>Programming Languages:</h4>
            <p>Python, JavaScript, Solidity, SQL, MongoDB</p>
          </div>
          <div data-aos="fade-up" className='mb-4'>
            <h4 className='text-2xl font-bold ' style={{ color: primaryColor }}>Developer Tools:</h4>
            <p>VS Code, Eclipse, PyCharm, Remix, IntelliJ, Version Control</p>
          </div>
          <div data-aos="fade-up" className='mb-4'>
            <h4 className='text-2xl font-bold ' style={{ color: primaryColor }}>Technologies / Frameworks:</h4>
            <p>React JS, Node JS, Express JS, Tailwind CSS, AWS, Blockchain, Git, GitHub, Docker</p>
          </div>
        </div>
      </div>           
    </div>
  );
};

export default About;
