'use client'

import { useEffect, useState } from 'react'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import AnimatedSection from './AnimatedSection'
import Eyebrow from './Eyebrow'

const LINES = [
  { text: '$ npm run dev', delay: 0 },
  { text: '', delay: 200 },
  { text: 'Server running on port 5000', delay: 500, color: 'text-emerald-500 dark:text-emerald-400' },
  { text: 'Database connected successfully', delay: 900, color: 'text-emerald-500 dark:text-emerald-400' },
  { text: 'Redis cache initialized', delay: 1300, color: 'text-emerald-500 dark:text-emerald-400' },
  { text: '', delay: 1500 },
  { text: 'API ready on http://localhost:5000', delay: 1800 },
]

function useTypedLines(active) {
  const [visibleLines, setVisibleLines] = useState([])

  useEffect(() => {
    if (!active) return
    const timers = LINES.map((line, i) =>
      setTimeout(() => {
        setVisibleLines((prev) => [...prev, line])
      }, line.delay)
    )
    return () => timers.forEach(clearTimeout)
  }, [active])

  return visibleLines
}

export default function TerminalShowcase() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const visibleLines = useTypedLines(inView)

  return (
    <section className="px-5 md:px-8 py-24 md:py-32 border-t border-paper-300 dark:border-carbon-400">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <Eyebrow>Local Environment</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-paper-700 dark:text-carbon-50 mb-12">
            Where the code actually runs.
          </h2>
        </AnimatedSection>

        <div ref={ref} className="rounded-2xl border border-paper-300 dark:border-carbon-400 bg-carbon-100 overflow-hidden shadow-xl">
          <div className="flex items-center gap-1.5 px-4 py-3 border-b border-carbon-400 bg-carbon-200/60">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
            <span className="ml-3 font-mono text-[11px] text-carbon-700">zsh — backend</span>
          </div>
          <div className="p-6 font-mono text-[13px] leading-loose min-h-[220px]">
            {visibleLines.map((line, i) => (
              <div key={i} className={line.color || 'text-carbon-700'}>
                {line.text || '\u00A0'}
              </div>
            ))}
            {visibleLines.length === LINES.length && (
              <span className="inline-block w-2 h-4 bg-signal animate-blink align-middle ml-0.5" />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
