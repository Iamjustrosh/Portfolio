import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Work from './pages/Work'
import NotFound from './pages/NotFound'
import Lenis from 'lenis'
import Preloader from './components/Preloader'
import { useEffect, useState } from 'react'

function App() {
  // Initialize Lenis
  const lenis = new Lenis({
    lerp: 0.1,
    smooth: true,
    smoothTouch: true, // enables smooth scroll even for touch devices
    gestureOrientation: 'vertical',
    touchMultiplier: 1.5, // feel free to tweak
    duration: 1.2, // adjust if scroll feels too fast or too slow
  });

  // Use requestAnimationFrame to continuously update the scroll
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  //prelaoder
  const [loading, setLoading] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true)
      setTimeout(() => {
        setLoading(false)
      }, 1000)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])


  return (
    <>
      {loading ? (
        <Preloader fadeOut={fadeOut} />
      ) : (
        <div className="min-h-screen flex flex-col bg-[#111] text-white overflow-hidden fade-in">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/work" element={<Work />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      )}

    </>
  )
}

export default App
