import React, { useContext } from 'react'
import { TypeAnimation } from 'react-type-animation'
import { RandomColorContext } from '../components/RandomColor'
import Navbar from '../components/Navbar'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Lottie from 'lottie-react'
import codingAnimation from '../assets/animation-hanumant-jain.json'
import Contact from '@/components/Contact'

const Home = () => {
  const primaryColor = useContext(RandomColorContext)

  return (
    <div>
      <Navbar />
      <div className='min-h-screen flex flex-col md:flex-row md:items-center md:justify-between justify-between pl-10 md:pl-0 py-64'>
        <div data-aos="fade-up" className='text-3xl md:text-6xl md:pl-20'>
          <h1 className='pb-3'>Hey, I'm Hanumant</h1>
          <span>{">"} </span>
          <span style={{ color: primaryColor }}>
            <TypeAnimation 
              sequence={[
                'Software Developer', 2000,
                'MSCS Student', 2000,
                'Web Developer', 2000
              ]}
              speed={50}
              repeat={Infinity}
            />
          </span>
        </div>

        <div data-aos="fade-up" className='w-80 md:w-2/5 mt-10 md:mt-0'>
          <Lottie 
            animationData={codingAnimation} 
            loop={true} 
          />
        </div>
      </div>
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  )
}

export default Home
