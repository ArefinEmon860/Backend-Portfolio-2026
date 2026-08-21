'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Moon, Sun, Menu, X, ArrowUpRight } from 'lucide-react'
import { useTheme } from '@/context/ThemeContext'
import { profile } from '@/data/content'

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'services', label: 'Services' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = NAV_ITEMS.map((i) => document.getElementById(i.id)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const handleNavClick = (id) => {
    setMenuOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'py-3' : 'py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div
            className={`flex items-center justify-between rounded-2xl px-4 md:px-5 py-2.5 transition-all duration-300 border ${
              scrolled
                ? 'bg-paper-100/80 dark:bg-carbon-100/70 backdrop-blur-xl border-paper-300 dark:border-carbon-400 shadow-lg shadow-black/[0.03] dark:shadow-black/20'
                : 'bg-transparent border-transparent'
            }`}
          >
            <button
              onClick={() => handleNavClick('home')}
              className="font-mono text-sm font-semibold tracking-tight text-paper-700 dark:text-carbon-50 flex items-center gap-2"
            >
              <span className="text-signal">{'>'}</span>
              {profile.name.split(' ')[0].toLowerCase()}
              <span className="text-signal">.dev</span>
            </button>

            <nav className="hidden lg:flex items-center gap-1">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="relative px-3.5 py-2 text-sm font-medium text-paper-600 dark:text-carbon-700 hover:text-paper-700 dark:hover:text-carbon-50 transition-colors"
                >
                  {active === item.id && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 bg-paper-200 dark:bg-carbon-300 rounded-lg"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="w-9 h-9 grid place-items-center rounded-lg border border-paper-300 dark:border-carbon-400 text-paper-600 dark:text-carbon-700 hover:text-signal hover:border-signal/40 transition-colors"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={theme}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="grid place-items-center"
                  >
                    {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
                  </motion.span>
                </AnimatePresence>
              </button>

              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 rounded-lg bg-paper-700 dark:bg-carbon-50 text-paper-100 dark:text-carbon-100 text-sm font-semibold px-4 py-2 hover:opacity-85 transition-opacity"
              >
                Resume
                <ArrowUpRight size={14} />
              </a>

              <button
                onClick={() => setMenuOpen((v) => !v)}
                aria-label="Toggle menu"
                className="lg:hidden w-9 h-9 grid place-items-center rounded-lg border border-paper-300 dark:border-carbon-400 text-paper-600 dark:text-carbon-700"
              >
                {menuOpen ? <X size={16} /> : <Menu size={16} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="fixed top-[74px] left-5 right-5 z-40 lg:hidden rounded-2xl border border-paper-300 dark:border-carbon-400 bg-paper-100/95 dark:bg-carbon-100/95 backdrop-blur-xl p-3 shadow-xl"
          >
            {NAV_ITEMS.map((item, i) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.04 }}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                  active === item.id
                    ? 'bg-paper-200 dark:bg-carbon-300 text-signal'
                    : 'text-paper-600 dark:text-carbon-700'
                }`}
              >
                {item.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
