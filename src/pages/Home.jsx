import React, { useContext } from 'react'
import { TypeAnimation } from 'react-type-animation'
import { RandomColorContext } from '../components/RandomColor'
import Navbar from '../components/Navbar'
import About2 from '@/components/About'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Lottie from 'lottie-react'
import codingAnimation from '../assets/animation-hanumant-jain.json'
import Contact from '@/components/Contact'
import Skills from '@/components/Skills'
import { ArrowDown } from 'lucide-react'

const Home = () => {
  const primaryColor = useContext(RandomColorContext)

  return (
    <div>
      <Navbar />
      <div className='min-h-screen flex flex-col md:flex-row md:items-center md:justify-between justify-between pl-10 md:pl-0 py-32 md:py-64'>
        <div data-aos="fade-up" className='text-3xl md:text-6xl md:pl-20 space-y-6'>
          <h1 className='pb-3 font-bold'>Hey, I'm <span style={{ color: primaryColor }}>Hanumant</span></h1>
          <div className="flex items-center space-x-2">
            <span className="text-2xl md:text-4xl">{">"} </span>
            <span style={{ color: primaryColor }} className="text-2xl md:text-4xl">
              <TypeAnimation 
                sequence={[
                  'Software Developer', 2000,
                  'MSCS Student', 2000,
                  'Web Developer', 2000,
                  'Full-Stack Engineer', 2000
                ]}
                speed={50}
                repeat={Infinity}
              />
            </span>
          </div>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed">
            Passionate about building scalable, user-centric digital solutions with modern technologies.
          </p>
        </div>

        <div data-aos="fade-up" className='w-80 md:w-2/5 mt-10 md:mt-0'>
          <Lottie 
            animationData={codingAnimation} 
            loop={true} 
          />
        </div>
      </div>
      <About2 />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </div>
  )
}

export default Home
