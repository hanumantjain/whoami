import { Routes, Route } from "react-router-dom"
import Introduction from "./pages/Introduction"
import Home from "./pages/Home"
import ScrollToTop from "./components/ScrollToTop"
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
        {/* <Route path='/' element={<Introduction />} /> */}
        <Route path="/" element={<Home />} />
      </Routes>
      <ScrollToTop />
    </div>
  )
}

export default App
