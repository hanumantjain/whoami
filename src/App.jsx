import { Routes, Route } from "react-router-dom"
import Introduction from "./pages/Introduction"
import Home from "./pages/Home"
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

function App() {

  useEffect(() => {
    Aos.init({
      duration: 1500,      
    });
  }, []);

  return (
    <div className='text-4xl'>
      <Routes>
        <Route path='/' element={<Introduction />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
