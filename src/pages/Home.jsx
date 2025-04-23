import React, { useContext } from 'react'
import { TypeAnimation } from 'react-type-animation'
import { RandomColorContext } from '../components/RandomColor'
import Navbar from '../components/Navbar'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Lottie from 'lottie-react'
import codingAnimation from '../assets/animation-hanumant-jain.json'

const Home = () => {
  const primaryColor = useContext(RandomColorContext)

  return (
    <div>
      <Navbar />
      <div className='min-h-screen flex flex-col md:flex-row items-center justify-between'>
        <div className='text-3xl md:text-6xl pl-10 md:pl-20'>
          <h1 className='pb-3'>Hey, I'm Hanumant</h1>
          <span>{">"} </span>
          <span style={{ color: primaryColor }}>
            <TypeAnimation 
              sequence={[
                'MSCS Student', 2000,
                'Software Developer', 2000,
                'Web Developer', 2000
              ]}
              speed={50}
              repeat={Infinity}
            />
          </span>
        </div>

        <div className='w-80 md:w-2/5 mt-10 md:mt-0'>
          <Lottie 
            animationData={codingAnimation} 
            loop={true} 
          />
        </div>
      </div>
      <About />
      <Experience />
      <Projects />
    </div>
  )
}

export default Home
