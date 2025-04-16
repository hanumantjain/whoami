import React, { useContext } from 'react'
import {TypeAnimation} from 'react-type-animation'
import { RandomColorContext } from '../components/RandomColor'

const Home = () => {
  const primaryColor = useContext(RandomColorContext)

  return (
    <div className='min-h-screen flex items-center text-white'>
      <div className=''>
        <div className='text-6xl pl-30'>
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