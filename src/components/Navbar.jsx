import React, { useState, useRef, useEffect } from 'react'
import logo from '../assets/logos/Emoti.webp'
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
    { href: "#home", label: "Home", },
    { href: "#works", label: "Works", },
    { href: "#about", label: "About", },
    { href: "#contact", label: "Contact", },
];

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const mobileMenuRef = useRef(null);
    const menuLinksRef = useRef([]);


    useEffect(() => {
        if (menuOpen) {
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
            gsap.to(mobileMenuRef.current, {
                opacity: 0,
                pointerEvents: "none",
                duration: 0.25,
                ease: "power2.in"
            });
        }
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
            </div>
        </nav>
    )
}

export default Navbar