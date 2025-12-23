import React from 'react'
import vector2 from '../assets/logos/Vector 2.webp'
import blueEllipse from '../assets/logos/Ellipse 3.webp'
import particles from '../assets/logos/particles 1.webp'
import avatar from '../assets/logos/Avatar.webp'
import Marquee from '../components/Marquee'
import pp from '../assets/logos/PremierePro.webp'
import mdb from '../assets/logos/MongoDB.webp'
import tailwind from '../assets/logos/TailwindCSS.webp'
import github from '../assets/logos/github.webp'
import react from '../assets/logos/React.webp'
import css from '../assets/logos/CSS.webp'
import html from '../assets/logos/HTML.webp'
import figma from '../assets/logos/FIGMA.webp'
import SkillsCard from '../components/SkillsCard'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import { useEffect } from "react";
import SplitType from "split-type";
import { gsap } from "gsap";
import SpotlightGlow from '../components/Spotlightglow'
import Hero from '../components/Hero'

const Home = () => {
  useEffect(() => {
    const heroText = document.querySelectorAll(".hero-text");
    const splits = [];

    heroText.forEach((heroText) => {
      // Reset if already split
      if (heroText.splitInstance) {
        heroText.splitInstance.revert();
      }

      // Split lines
      const split = new SplitType(heroText, {
        types: "lines",
        lineClass: "split-line"
      });

      heroText.splitInstance = split; // Save for later cleanup
      splits.push(split);

      // Animate the lines
      gsap.from(split.lines, {
        y: 50,
        duration: 1,
        ease: "power1.out",
        stagger: 0.1
      });
    });

    // Cleanup on unmount
    return () => {
      splits.forEach((split) => split.revert());
    };
  }, []);
  return (
    <>
      <div className="home-page min-h-screen flex flex-col">



          {/* Glow */}
          {/* <SpotlightGlow position="right" color="bg-orange-600" />
          <SpotlightGlow position="left" color="bg-purple-500" /> */}

          <Hero />
          {/* Content */}
          {/* <main className="relative z-10 flex min-h-screen items-center justify-center">
            <h1 className="text-4xl font-bold text-white">
            </h1>
          </main> */}


        {/* Marquee */}
        {/* <div className="w-full z-40">
          <Marquee />
        </div> */}


        {/* Skills */}
        <SkillsCard />

        {/* Projects */}
        <Projects />
        {/* Contact */}
        <Contact />


      </div>
    </>
  )
}

export default Home