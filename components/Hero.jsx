'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ArrowUpRight, ChevronDown } from 'lucide-react'
import { profile } from '@/data/content'

const requestLines = [
  { t: 'method', v: 'GET' },
  { t: 'path', v: '/api/v1/projects' },
]

const responseBody = `{
  "status": "success",
  "statusCode": 200,
  "responseTime": "42ms",
  "cache": "HIT",
  "data": {
    "count": 12,
    "role": "backend_developer"
  }
}`

export default function Hero() {
  const cardX = useMotionValue(0)
  const cardY = useMotionValue(0)
  const rotateX = useSpring(useTransform(cardY, [-60, 60], [6, -6]), { stiffness: 150, damping: 18 })
  const rotateY = useSpring(useTransform(cardX, [-60, 60], [-6, 6]), { stiffness: 150, damping: 18 })

  function handleCardMove(e) {
    const rect = e.currentTarget.getBoundingClientRect()
    cardX.set(e.clientX - rect.left - rect.width / 2)
    cardY.set(e.clientY - rect.top - rect.height / 2)
  }
  function handleCardLeave() {
    cardX.set(0)
    cardY.set(0)
  }

  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex items-center pt-28 pb-16 px-5 md:px-8"
    >
      <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-[1.1fr_1fr] gap-14 lg:gap-8 items-center">
        {/* Left column */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-paper-300 dark:border-carbon-400 px-3 py-1.5 mb-7"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-pulseSoft absolute inline-flex h-full w-full rounded-full bg-emerald-400" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span className="font-mono text-xs text-paper-600 dark:text-carbon-700">
              {profile.availability}
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="font-mono text-sm text-signal mb-4 tracking-wide"
          >
            {'// '}{profile.role}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="text-[2.6rem] leading-[1.08] sm:text-6xl lg:text-[3.6rem] font-bold tracking-tight text-paper-700 dark:text-carbon-50"
          >
            Building backend
            <br />
            systems that <span className="text-signal">scale.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.18 }}
            className="mt-6 text-base sm:text-lg text-paper-600 dark:text-carbon-700 max-w-lg leading-relaxed"
          >
            I build robust REST APIs, scalable backend architectures, authentication
            systems, and database-driven applications — the infrastructure products
            depend on but rarely see.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.26 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="group inline-flex items-center gap-2 rounded-lg bg-paper-700 dark:bg-carbon-50 text-paper-100 dark:text-carbon-100 font-semibold px-5 py-3 text-sm hover:opacity-85 transition-all hover:-translate-y-0.5"
            >
              View Projects
              <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="inline-flex items-center gap-2 rounded-lg border border-paper-300 dark:border-carbon-400 font-semibold px-5 py-3 text-sm text-paper-700 dark:text-carbon-50 hover:border-signal/50 hover:text-signal transition-all hover:-translate-y-0.5"
            >
              Let's Work Together
            </a>
          </motion.div>
        </div>

        {/* Right column — signature API terminal visualization */}
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
          style={{ perspective: 900 }}
        >
          <div className="absolute inset-0 bg-signal/10 blur-3xl rounded-full scale-90 -z-10" />
          <motion.div
            onMouseMove={handleCardMove}
            onMouseLeave={handleCardLeave}
            style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
            className="rounded-2xl border border-paper-300 dark:border-carbon-400 bg-paper-100 dark:bg-carbon-100 shadow-2xl shadow-black/[0.06] dark:shadow-black/40 overflow-hidden">
            {/* window chrome */}
            <div className="flex items-center gap-1.5 px-4 py-3 border-b border-paper-300 dark:border-carbon-400 bg-paper-200/60 dark:bg-carbon-200/60">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
              <span className="ml-3 font-mono text-[11px] text-paper-600 dark:text-carbon-700">
                request.http
              </span>
            </div>

            <div className="p-5 font-mono text-[13px] leading-relaxed">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-signal font-semibold">{requestLines[0].v}</span>
                <span className="text-paper-700 dark:text-carbon-50">{requestLines[1].v}</span>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.4 }}
                className="rounded-lg bg-paper-200 dark:bg-carbon-200 border border-paper-300 dark:border-carbon-400 p-4"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span className="text-emerald-500 dark:text-emerald-400 text-xs font-semibold">
                    200 OK
                  </span>
                  <span className="text-paper-600 dark:text-carbon-600 text-xs ml-auto">
                    42ms
                  </span>
                </div>
                <pre className="whitespace-pre-wrap text-[12.5px] text-paper-600 dark:text-carbon-700 m-0">
{responseBody}
                </pre>
              </motion.div>
            </div>
          </motion.div>

          {/* floating architecture tag */}
          <motion.div
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="hidden md:flex absolute -bottom-5 -left-5 items-center gap-2 rounded-xl border border-paper-300 dark:border-carbon-400 bg-paper-100 dark:bg-carbon-100 px-4 py-2.5 shadow-lg"
          >
            <span className="font-mono text-[11px] text-paper-600 dark:text-carbon-700">
              Express.js → MongoDB
            </span>
          </motion.div>
        </motion.div>
      </div>

      <motion.button
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="hidden sm:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-1.5 text-paper-600 dark:text-carbon-600"
        aria-label="Scroll to explore"
      >
        <span className="font-mono text-[10px] tracking-widest uppercase">Scroll</span>
        <motion.span
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={16} />
        </motion.span>
      </motion.button>
    </section>
  )
}
