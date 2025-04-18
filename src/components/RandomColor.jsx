import React, { createContext, useEffect, useState } from 'react';

export const RandomColorContext = createContext('#007BFF');

export const RandomColorProvider = ({ children }) => {
  const colors = [
    '#007BFF', '#00A99D', '#FFC107', '#FF6B6B', '#8A2BE2',
    '#28A745', '#FF1493', '#E67E22', '#32CD32',
  ];

  const [primaryColor, setPrimaryColor] = useState('#007BFF');

  useEffect(() => {
    const i = Math.floor(Math.random() * colors.length);
    setPrimaryColor(colors[i]);
  }, []);

  return (
    <RandomColorContext.Provider value={primaryColor}>
      {children}
    </RandomColorContext.Provider>
  );
};
