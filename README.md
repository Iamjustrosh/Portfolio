# 🚀 Roshan Jain – Developer Portfolio

A clean, modern, and responsive personal portfolio built with **React**, **Vite**, and **Tailwind CSS**. Showcases skills, experience, projects, and contact info — with rich animations, a dedicated work page, and a live developer presence widget powered by Supabase.

---

## ✨ Features

### Home (`/`)
- 🎨 **Animated Hero** — floating 3D skill icons, scrolling background text, spotlight glows, and word-by-word motion animations
- 🧠 **Skills Showcase** — dynamic skill cards with marquee and scroll-triggered effects
- 💼 **Experience Timeline** — work history with GSAP scroll animations
- 🛠️ **Featured Projects** — curated project highlights with smooth reveal animations
- 📬 **Contact Form** — EmailJS-powered message submission

### Work (`/work`)
- 📂 **Full Project Gallery** — filterable grid by category with project stats
- 🎬 **GSAP Animations** — staggered card entrances and scroll-triggered transitions

### Global
- 🟢 **Developer Presence Widget** — real-time online/away/offline status via Supabase, showing current project, file, language, and activity (pairs with a VS Code extension)
- 📱 **Full-Screen Mobile Nav** — GSAP-animated overlay menu with social links and resume download
- ⏳ **Preloader** — branded loading screen on first visit
- 🌀 **Smooth Scrolling** — Lenis-powered inertia scroll
- 📊 **Microsoft Clarity** — session analytics and heatmaps
- ⚡ **Fully Responsive** — optimized across mobile, tablet, and desktop

---

## 🧱 Tech Stack

| Tech | Description |
|------|-------------|
| **React 19 + Vite** | Fast React development and build tooling |
| **React Router** | Client-side routing (`/`, `/work`, 404) |
| **Tailwind CSS 4** | Utility-first styling |
| **shadcn/ui** | Accessible UI components (Button, Card, Input, etc.) |
| **GSAP + ScrollTrigger** | Scroll animations, navbar transitions, text splits |
| **Motion** | Hero and presence widget animations |
| **Lenis** | Smooth scroll behavior |
| **SplitType** | Line-by-line hero text animation |
| **Supabase** | Realtime presence data for the developer widget |
| **EmailJS** | Contact form email delivery |
| **Microsoft Clarity** | User behavior analytics |
| **Remix Icon + Lucide** | Icon libraries |
| **WebP** | Optimized image assets |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation

```bash
git clone https://github.com/Iamjustrosh/Portfolio.git
cd Portfolio
npm install
```

### Environment Variables

Create a `.env` file in the project root:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_PROJECT_ID=your_microsoft_clarity_project_id
```

| Variable | Purpose |
|----------|---------|
| `VITE_SUPABASE_URL` | Supabase project URL for the presence widget |
| `VITE_SUPABASE_ANON_KEY` | Supabase anonymous key for realtime presence |
| `VITE_PROJECT_ID` | Microsoft Clarity project ID for analytics |

> The contact form uses EmailJS credentials configured directly in `Contact.jsx`. The presence widget requires a `presence` table in Supabase (used by the companion VS Code extension).

### Development

```bash
npm run dev      # Start dev server
npm run build    # Production build
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

---

## 📁 Project Structure

```
src/
├── components/     # UI components (Hero, Navbar, PresenceWidget, etc.)
├── pages/          # Route pages (Home, Work, NotFound)
├── constants/      # Projects and skills data
├── hooks/          # Custom hooks (usePresence)
├── lib/            # Utilities (Supabase client, Lenis, presence helpers)
└── assets/         # Images and logos
```

---

## 🔗 Live Demo

[Visit Portfolio](https://iamjustrosh.in/)

---

## 📬 Contact

**Roshan Jain**

📧 roshanjain7422@gmail.com

🔗 [LinkedIn](https://www.linkedin.com/in/iamjustrosh/) • [Instagram](https://www.instagram.com/iamjustrosh/) • [GitHub](https://github.com/Iamjustrosh/) • [Discord](https://discord.gg/yU5br5Mw6H)
