import React, { useState, useRef, useEffect } from 'react'
import logo from '../assets/logos/Emoti.webp'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import 'remixicon/fonts/remixicon.css'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'



const navLinks = [
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
                    duration: 0.4,
                    stagger: 0.07,
                    delay: 0.1,
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
        <nav className="px-4 flex justify-between items-center relative bg-transparent z-50">

            <div className="flex items-center relative md:left-6 z-20">
                <a href="/">
                    <img src={logo} className="" alt="logo" loading="lazy"/>
                </a>
            </div>


            <button
                className="z-20 text-white text-3xl focus:outline-none relative right-6"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
            >
                <i className={menuOpen ? "ri-close-line" : "ri-menu-line"}></i>
            </button>


            <div
                ref={mobileMenuRef}
                style={{ opacity: 0, pointerEvents: "none" }}
                className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex flex-col items-start justify-center px-14 gap-8 z-10 "
            >
                {navLinks.map((link, idx) => (
                    <a
                        key={link.href}
                        href={link.href}
                        ref={el => menuLinksRef.current[idx] = el}
                        className="flex items-center gap-3 text-5xl text-white hover:text-orange-500 transition"
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
                    <a href="https://www.instagram.com/iamjustrosh/" target="_blank" rel="noopener noreferrer" className="text-4xl text-white hover:text-orange-500 transition">
                        <i className="ri-instagram-fill"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/iamjustrosh/" target="_blank" rel="noopener noreferrer" className="text-4xl text-white hover:text-orange-500 transition">
                        <i className="ri-linkedin-fill"></i>
                    </a>
                    <a href="https://github.com/Iamjustrosh/" target="_blank" rel="noopener noreferrer" className="text-4xl text-white hover:text-orange-500 transition">
                        <i className="ri-github-fill"></i>
                    </a>
                    <a href="https://x.com/Iamjustrosh" target="_blank" rel="noopener noreferrer" className="text-4xl text-white hover:text-orange-500 transition">
                        <i className="ri-twitter-fill"></i>
                    </a>
                    <a href="https://www.behance.net/roshanjain12" target="_blank" rel="noopener noreferrer" className="text-4xl text-white hover:text-orange-500 transition">
                        <i className="ri-behance-fill"></i>
                    </a>
                </div>

                {/* Download Resume CTA */}
                <a
                    href="/assets/Resume.pdf"
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