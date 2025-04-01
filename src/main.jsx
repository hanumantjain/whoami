import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { RandomColorProvider } from './components/RandomColor.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <RandomColorProvider>
        <App />
      </RandomColorProvider>
    </BrowserRouter>
  </StrictMode>,
)
