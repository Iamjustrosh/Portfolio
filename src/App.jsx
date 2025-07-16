import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Work from './pages/Work'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#111] text-white overflow-hidden">
      <Navbar />
      
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home/> } />
          <Route path="/work" element={<Work />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App
