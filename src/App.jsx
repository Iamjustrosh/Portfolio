import { Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Lenis from 'lenis'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Preloader from './components/Preloader'
import ScrollToTop from './components/ScrollToTop'

import Home from './pages/Home'
import Work from './pages/Work'
import NotFound from './pages/NotFound'

import { setLenis } from './lib/lenis'
import { PresenceWidget } from './components/PresenceWidget'

function App() {

  const [loading, setLoading] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)

  // Preloader
  useEffect(() => {
    const timer = setTimeout(() => {

      setFadeOut(true)

      setTimeout(() => {
        setLoading(false)
      }, 1000)

    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  // Lenis
  useEffect(() => {

    if (loading) return

    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
      smoothTouch: true,
      duration: 1.2,
    })

    setLenis(lenis)

    let rafId

    const raf = (time) => {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }

    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }

  }, [loading])

  return (
    <>
      {loading ? (
        <Preloader fadeOut={fadeOut} />
      ) : (
        <div className="min-h-screen flex flex-col bg-[#111] text-white overflow-hidden fade-in">

          <ScrollToTop />

          <Navbar />

          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/work" element={<Work />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>

          <Footer />
          <PresenceWidget />

        </div>
      )}
    </>
  )
}

export default App