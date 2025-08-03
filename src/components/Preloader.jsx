import React, { useEffect, useRef } from 'react'
import logo from '../assets/logos/Emoti.png'
import { gsap } from 'gsap'

const Preloader = ({ fadeOut }) => {
  const imgRef = useRef(null);

  useEffect(() => {
    if (imgRef.current) {
      gsap.to(imgRef.current, {
        y: -60,
        duration: 0.8,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });
    }
    // Optional: cleanup animation on unmount
    return () => {
      gsap.killTweensOf(imgRef.current);
    };
  }, []);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#111] text-white text-xl transition-opacity duration-1000 ${fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
    >
      <img
        ref={imgRef}
        className="w-48"
        src={logo}
        alt="Loading Logo"
        loading="lazy"
      />
    </div>
  )
}

export default Preloader