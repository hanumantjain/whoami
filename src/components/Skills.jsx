import React, { useContext } from 'react'
import { RandomColorContext } from '../components/RandomColor'

const Skills = () => {
    const primaryColor = useContext(RandomColorContext)
  return (
    <div className='w-full max-w-6xl mx-auto text-lg py-20 px-10'>
        <h2 className="text-5xl text-center mb-20 font-bold">Technical Skills</h2>
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
  )
}

export default Skills