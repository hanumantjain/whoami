import React, { createContext, useEffect, useState } from 'react'

const RandomColorContext = createContext()

const RandomColorProvider = ({ children }) => {
    const colors = [
        "#007BFF", 
        "#00A99D", 
        "#FFC107", 
        "#FF6B6B", 
        "#8A2BE2", 
        "#28A745", 
        "#6C757D", 
        "#FF1493", 
        "#E67E22", 
        "#32CD32"  
      ];

      const [primaryColor, setPrimaryColor] = useState('#007BFF')

      useEffect(() => {
        const randomColor = Math.floor(Math.random() * colors.length)
        setPrimaryColor(colors[randomColor])
      }, [])
  return (
    <RandomColorContext.Provider value={primaryColor}>
        {children}
    </RandomColorContext.Provider>
  )
}

export { RandomColorContext, RandomColorProvider}