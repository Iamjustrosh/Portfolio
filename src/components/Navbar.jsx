import React, { useState, useRef, useEffect } from 'react'
import logo from '../assets/logos/Emoti.webp'
import resume from '../assets/Resume.pdf'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import 'remixicon/fonts/remixicon.css'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'


const style = {
    backgroundImage: `
      linear-gradient(#111,#111), 
      linear-gradient(to top right, rgba(217, 103, 4, 0) 0%, rgba(217, 103, 4, 1) 100%)
    `,
    backgroundOrigin: 'padding-box, border-box',
    backgroundClip: 'padding-box, border-box',
    border: '1px solid transparent',

}

const navLinks = [
    // { href: "#home", label: "Home", },
    { href: "#works", label: "Works", },
    { href: "#skills", label: "Skills", },
    { href: "#contact", label: "Contact", },
];

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const mobileMenuRef = useRef(null);
    const menuLinksRef = useRef([]);


    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
            gsap.to(mobileMenuRef.current, {
                opacity: 1,
                pointerEvents: "auto",
                duration: 0.3,
                ease: "power4.in"
            });
            gsap.fromTo(
                menuLinksRef.current,
                { y: 40, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.07,
                    delay: 0.3,
                    ease: "power4.out"
                }
            );
        } else {
            document.body.style.overflow = '';
            gsap.to(mobileMenuRef.current, {
                opacity: 0,
                pointerEvents: "none",
                duration: 0.25,
                ease: "power2.in"
            });
        }
        // Clean up in case the component unmounts while menu is open
        return () => {
            document.body.style.overflow = '';
        };
    }, [menuOpen]);

    return (
        <nav className="p-4 py-10 flex justify-between md:justify-center items-center relative bg-transparent z-50">

            <div className="flex items-center md:absolute md:left-6 z-20">
                <img src={logo} className="" alt="logo" />
            </div>


            <div className="hidden md:flex justify-center items-center rounded-full" style={style}>
                <div className="flex gap-10 px-10 text-xl font-[roboto] py-2 rounded-full" >
                    {navLinks.map(link => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="flex items-center gap-2 text-white"
                        >
                            <span>{link.label}</span>
                        </a>
                    ))}
                </div>
            </div>


            <button
                className="md:hidden  z-20 text-white text-3xl focus:outline-none"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
            >
                <i className={menuOpen ? "ri-close-line" : "ri-menu-line"}></i>
            </button>


            <div
                ref={mobileMenuRef}
                style={{ opacity: 0, pointerEvents: "none" }}
                className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex flex-col items-center justify-center gap-8 z-10 md:hidden"
            >
                {navLinks.map((link, idx) => (
                    <a
                        key={link.href}
                        href={link.href}
                        ref={el => menuLinksRef.current[idx] = el}
                        className="flex items-center gap-3 text-2xl text-white"
                        onClick={() => setMenuOpen(false)}
                        style={{ opacity: 0, transform: 'translateY(40px)' }}
                    >
                        <span>{link.label}</span>
                    </a>
                ))}

                {/* Social Icons */}
                <div
                    className="flex gap-6 mt-8"
                    style={{ opacity: 0, transform: 'translateY(40px)' }}
                    ref={el => menuLinksRef.current[navLinks.length + 1] = el}
                >
                    <a href="https://www.instagram.com/am_crusher.hatake/" target="_blank" rel="noopener noreferrer" className="text-2xl text-white hover:text-orange-500 transition">
                        <i className="ri-instagram-fill"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/roshanjain7422/" target="_blank" rel="noopener noreferrer" className="text-2xl text-white hover:text-orange-500 transition">
                        <i className="ri-linkedin-fill"></i>
                    </a>
                    <a href="https://github.com/Iamjustrosh/" target="_blank" rel="noopener noreferrer" className="text-2xl text-white hover:text-orange-500 transition">
                        <i className="ri-github-fill"></i>
                    </a>
                    <a href="https://x.com/Iamjustrosh" target="_blank" rel="noopener noreferrer" className="text-2xl text-white hover:text-orange-500 transition">
                        <i className="ri-twitter-fill"></i>
                    </a>
                </div>

                {/* Download Resume CTA */}
                <a
                    href={resume}
                    download
                    className="mt-4 px-6 py-2 bg-orange-500 text-white rounded-full font-semibold text-lg shadow-lg hover:bg-orange-600 transition"
                    onClick={() => setMenuOpen(false)}
                    style={{ opacity: 0, transform: 'translateY(40px)' }}
                    ref={el => menuLinksRef.current[navLinks.length] = el}
                >
                    Download Resume
                </a>

            </div>
        </nav>
    )
}

export default Navbar