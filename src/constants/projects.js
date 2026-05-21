import cc from '../assets/projects/cc.png'
import pp from '../assets/projects/pp.png'
import ems from '../assets/projects/ems.png'
import tlr from '../assets/projects/tlr.png'
import ford from '../assets/projects/ford.png'
import zappos from '../assets/projects/zappos.png'
import collaboard from '../assets/projects/cb.png' 
import timer from '../assets/projects/timer.png'

export const PROJECTS = [
  {
    id: "01",
    title: "Collaboard",
    type: "Collaboration Tool — Desktop App",
    description: "A real-time collaborative whiteboard for teams to brainstorm, plan, and build together.",
    fullDescription:
      "Collaboard is a real-time collaborative whiteboard platform built for modern teams. It supports simultaneous multi-user drawing, sticky notes, shape tools, and live cursors — making remote brainstorming sessions as fluid as in-person ones. Engineered for low latency and high reliability.",
    image: collaboard, // Replace with: import collaboard from '../assets/projects/collaboard.webp'
    techStack: ["Electron", "React", "Supabase ", "Monaco Editor", "tldraw API", "PeerJS ", "Tailwind CSS", "Framer Motion + GSAP"],
    github: "https://github.com/iamjustrosh/Major-Project",
    live: "https://collabboard-web.vercel.app/",
    featured: true,
    category: "Desktop App",
    year: "2026",
  },

  {
    id: "02",
    title: "Pranjal Pathshala",
    type: "Coaching Institute — Web App",
    description: "A professional web app for a coaching institute featuring courses, faculty, and enrollment flows.",
    fullDescription:
      "Pranjal Pathshala is a full-featured coaching institute website designed to help students discover courses, view faculty profiles, and get enrolled. The site emphasizes trust, clarity, and conversion — built with performance and mobile-first design in mind.",
    image: pp,
    techStack: ["React", "Tailwind CSS", "Vite", "Supabase","EmailJS"],
    github: "https://github.com/iamjustrosh/pranjal-pathshala",
    live: "https://pranjal-pathshala.vercel.app/",
    featured: true,
    category: "Web App",
    year: "2025",
  },
  {
    id: "03",
    title: "Code Chronicles",
    type: "Quiz Platform — Website",
    description: "An interactive quiz platform for developers to test and sharpen their coding knowledge.",
    fullDescription:
      "Code Chronicles is a developer-focused quiz platform that lets users test their knowledge across multiple programming languages and concepts. It features dynamic question sets, real-time scoring, progress tracking, and a clean UI built for speed and accessibility.",
    image: cc,
    techStack: ["React", "Tailwind CSS", "Supabase", "Vite"],
    github: "https://github.com/iamjustrosh/CodeChronicles",
    live: "https://code-chronicles-mauve.vercel.app/",
    featured: true,
    category: "Website",
    year: "2024",
  },
  {
    id: "04",
    title: "Project Timer",
    type: "Productivity Tool — Desktop App",
    description: "A lightweight desktop timer and stopwatch app with transparent glass-like UI.",
    fullDescription:
      "Project Timer is a modern desktop productivity app featuring a sleek transparent acrylic-inspired interface with timer and stopwatch modes. Initially developed using Electron and later migrated to Tauri, reducing the final application size to just 8MB while significantly improving startup speed and performance. The app includes keyboard shortcuts, draggable frameless window support, always-on-top functionality, and a polished glassmorphism design optimized for daily productivity workflows.",
    image: timer,
    techStack: ["React", "Tailwind CSS", "Tauri", "Electron", "Rust", "Vite"],
    github: "https://github.com/iamjustrosh/Project-Timer-V2-Tauri-Edition",
    live: "",
    featured: true,
    category: "Desktop App",
    year: "2025",
  },
  {
    id: "05",
    title: "Employee Management System",
    type: "EMS System — Website",
    description: "A role-based employee management system for managing tasks, roles, and records efficiently.",
    fullDescription:
      "A comprehensive Employee Management System featuring role-based access control, task assignment, and employee record management. Designed for small to medium teams needing a streamlined admin dashboard without complex enterprise overhead.",
    image: ems,
    techStack: ["HTML", "CSS", "JavaScript","React", "LocalStorage"],
    github: "https://github.com/iamjustrosh/EMS",
    live: "https://iamjustrosh.github.io/EMS/",
    featured: false,
    category: "Dashboard",
    year: "2024",
  },
  {
    id: "06",
    title: "The Last Ride",
    type: "Open World Car Racing — Game",
    description: "An open-world car racing game concept with immersive environments and fast-paced gameplay.",
    fullDescription:
      "The Last Ride is an open-world car racing game project exploring real-time 3D rendering, physics simulation, and immersive environment design. Currently in development, the project pushes browser-based gaming boundaries with custom car mechanics and world-building.",
    image: tlr,
    techStack: ["Unity", "C#", "Blender", "WebGL"],
    github: "",
    live: "#",
    featured: false,
    category: "Game",
    year: "2025",
  },
  {
    id: "07",
    title: "Reimagined Ford",
    type: "Ford — Website",
    description: "A complete reimagination of Ford's web presence with modern design and smooth interactions.",
    fullDescription:
      "A design challenge entry that completely reimagines the Ford brand website — featuring cinematic hero sections, scroll-driven animations, and a bold visual language that matches Ford's legacy of power and innovation. Built as part of a competitive reimagine round.",
    image: ford,
    techStack: ["React", "GSAP", "Tailwind CSS", "Vite"],
    github: "https://github.com/Iamjustrosh/TheTripleThreatReimagineRound1",
    live: "https://the-triple-threat-reimagine-round1.vercel.app/",
    featured: false,
    category: "Hackathon",
    year: "2024",
  },
  {
    id: "08",
    title: "Reimagined Zappos",
    type: "Zappos — Website",
    description: "A bold reimagination of the Zappos e-commerce experience with elevated UI and UX.",
    fullDescription:
      "Reimagined Zappos is a UI/UX redesign challenge entry that modernizes the Zappos shopping experience. Features a fresh visual hierarchy, animated product browsing, and a refined checkout flow — all while preserving the brand's energetic personality.",
    image: zappos,
    techStack: ["React", "GSAP", "Tailwind CSS", "Vite"],
    github: "https://github.com/Iamjustrosh/TheTripleThreatReimagineRound2",
    live: "https://the-triple-threat-reimagine-round2.vercel.app/",
    featured: false,
    category: "Hackathon",
    year: "2024",
  },

]

export const FEATURED_PROJECTS = PROJECTS.filter((p) => p.featured)