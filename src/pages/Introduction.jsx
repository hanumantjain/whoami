import React, { useEffect } from 'react'
import { motion } from 'motion/react'
import { useContext } from "react"
import { RandomColorContext } from '../components/RandomColor'
import { useNavigate } from 'react-router-dom'

const Introduction = () => {
    const primaryColor = useContext(RandomColorContext)
    const text = 'HANUMANT'.split('')
    const navigate = useNavigate()

    useEffect(() => {
        const timer = setTimeout(() =>{
            navigate('/home')
        }, 5000)
        return () => clearTimeout(timer)
    }, [navigate])

  return (
    <div style={{ color: primaryColor }} className='w-full h-screen flex justify-center items-center'>
        {text.map((letter, index) => (
            <motion.span
            key = {index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5, ease: 'easeOut' }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl"
            >
                {letter}
            </motion.span>
        ))
        }
    </div>
  )
}

export default Introduction
