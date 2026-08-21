'use client'

import { ThemeProvider } from '@/context/ThemeContext'
import CustomCursor from '@/components/CustomCursor'
import InteractiveBackground from '@/components/InteractiveBackground'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Architecture from '@/components/Architecture'
import Services from '@/components/Services'
import TerminalShowcase from '@/components/TerminalShowcase'
import SocialProof from '@/components/SocialProof'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-paper-100 dark:bg-carbon-100 text-paper-700 dark:text-carbon-50 transition-colors duration-300 selection:bg-signal selection:text-carbon-100">
        <CustomCursor />
        <InteractiveBackground />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Architecture />
          <Services />
          <TerminalShowcase />
          <SocialProof />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
