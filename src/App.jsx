import { Routes, Route } from "react-router-dom"
import Introduction from "./pages/Introduction"
import Home from "./pages/Home"

function App() {
  return (
    <div className='text-4xl bg-black'>
      <Routes>
        <Route path='/' element={<Introduction />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
