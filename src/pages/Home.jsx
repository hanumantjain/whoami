import React, { useContext } from 'react'
import {TypeAnimation} from 'react-type-animation'
import { RandomColorContext } from '../components/RandomColor'
import Navbar from '../components/Navbar'

const Home = () => {
  const primaryColor = useContext(RandomColorContext)

  return (
    <div className='min-h-screen flex items-center text-white'>
      <Navbar />
      <div className=''>
        <div className='text-3xl md:text-6xl pl-10 md:pl-30'>
          <h1 className='pb-3'>Hey, I'm Hanumant </h1>
            <span>I'm {">"} </span>
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
      </div>
    </div>
  )
}

export default Home