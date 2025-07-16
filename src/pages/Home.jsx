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
import ProjectCard from '../components/ProjectCard'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <>
      <div className="home-page min-h-screen flex flex-col">
        <img src={vector2} alt="" className="absolute right-0 top-0 z-0 pointer-events-none" />
        <img src={vector2} alt="" className="absolute right-0 top-0 z-0 pointer-events-none" />


        {/* Hero Heading */}
        <div className="relative z-10 flex flex-col items-center w-full pt-16 md:pt-24">
          <div className="heading w-full flex flex-col items-center">
            <div className="hero-description font-bold text-center text-lg md:text-3xl text-white w-11/12 md:w-2/3 flex justify-center items-center mb-8">
              <h1>
                Roshan Jain, a passionate developer who blends creativity with code. From building responsive websites to exploring virtual worlds and anime, I bring energy and precision to everything I create.
              </h1>
            </div>
          </div>
        </div>

        {/* Hero images */}
        <div className="hero-img-container relative flex flex-col items-center w-full h-[260px] md:h-[450px] mb-8">
          {/* Particles */}
          <div className="particles absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-md md:w-1/3">
            <img src={particles} alt="" className="w-full h-auto" />
          </div>
          {/* Avatar */}
          <div className="avatar absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 w-md md:w-1/3">
            <img src={avatar} alt="" className="w-full h-auto" />
          </div>
          {/*Skills Logos */}
          <div className="skills-icons pointer-events-none absolute inset-0 w-full h-full">
            <img className="absolute z-20 right-5  top-12 w  md:right-52 md:top-12 w-12 md:w-34" src={pp} alt="" />
            <img className="absolute z-20 left-14  top-6 md:left-1/4 w-12 md:w-44" src={mdb} alt="" />
            <img className="absolute z-20 left-3  top-40  md:left-1/3 md:top-40  w-12 md:w-32" src={tailwind} alt="" />
            <img className="absolute z-20 left-12  bottom-2 md:left-102 md:bottom-8 w-12 md:w-28" src={github} alt="" />
            <img className="absolute z-20 right-12  md:right-1/4 md:top-4 w-12 md:w-40 -translate-x-1/2" src={react} alt="" />
            <img className="absolute z-20 left-6  top-1/3  md:left-65 md:top-1/3 w-12 md:w-28" src={css} alt="" />
            <img className="absolute z-20 right-3 bottom-22  md:right-1/3 md:bottom-32 w-12 md:w-20" src={html} alt="" />
            <img className="absolute z-20 right-8 bottom-4  md:right-1/8 md:bottom-10 w-12 md:w-48 -translate-x-1/2" src={figma} alt="" />
          </div>
        </div>


        {/* Marquee */}
        <div className="w-full z-40">
          <Marquee />
        </div>


        {/* Skills */}
        <SkillsCard />

        {/* Projects */}
        <Projects />
        {/* Contact */}
        <Contact/>

        {/* TODO: 
            Contact Section ✅
            Add Skills ✅
            Fix navbar on mobile screen
            Loading animation 
            Add Animations 
              Images on projects
              Navbar hover
              parallax hero section
              marquee 
              scale and bg fill
            Optimise & responsive 
            Add Socials in navbar in mobile
            Work page design and categories ❌
            adding lenis or locomotive

        */}
      </div>
    </>
  )
}

export default Home