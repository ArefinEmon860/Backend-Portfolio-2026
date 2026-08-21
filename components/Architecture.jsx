'use client'

import { motion } from 'framer-motion'
import AnimatedSection from './AnimatedSection'
import Eyebrow from './Eyebrow'
import { architectureLayers } from '@/data/content'
import { ShieldCheck, Gauge, Database, ScrollText, CheckCircle2 } from 'lucide-react'

const crossCutting = [
  { icon: ShieldCheck, label: 'Authentication' },
  { icon: CheckCircle2, label: 'Validation' },
  { icon: Gauge, label: 'Rate Limiting' },
  { icon: Database, label: 'Caching' },
  { icon: ScrollText, label: 'Logging' },
]

export default function Architecture() {
  return (
    <section className="px-5 md:px-8 py-24 md:py-32 border-t border-paper-300 dark:border-carbon-400 bg-paper-200/30 dark:bg-carbon-200/20">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <Eyebrow>Behind the API</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-paper-700 dark:text-carbon-50 mb-4">
            How a request becomes a response.
          </h2>
          <p className="text-paper-600 dark:text-carbon-700 max-w-xl mb-14 leading-relaxed">
            Every request flows through layers built for reliability — not just the
            happy path.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-[1fr_auto] gap-10 items-start">
          {/* main flow */}
          <div className="relative">
            {architectureLayers.map((layer, idx) => (
              <AnimatedSection key={layer.name} delay={idx * 0.06} className="relative">
                <div className="flex items-center gap-5 py-4">
                  <span className="font-mono text-xs text-paper-600 dark:text-carbon-600 w-6 shrink-0">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <div className="flex-1 rounded-xl border border-paper-300 dark:border-carbon-400 bg-paper-100 dark:bg-carbon-100 px-5 py-3.5 flex items-center justify-between">
                    <span className="font-semibold text-paper-700 dark:text-carbon-50 text-sm md:text-base">
                      {layer.name}
                    </span>
                    <span className="font-mono text-xs text-paper-600 dark:text-carbon-600">
                      {layer.detail}
                    </span>
                  </div>
                </div>
                {idx !== architectureLayers.length - 1 && (
                  <div className="ml-[46px] h-6 w-px relative overflow-hidden">
                    <div className="absolute inset-0 bg-paper-300 dark:bg-carbon-400" />
                    <motion.div
                      className="absolute top-0 left-0 w-full bg-signal"
                      style={{ height: '40%' }}
                      animate={{ y: ['-100%', '150%'] }}
                      transition={{
                        duration: 1.6,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: idx * 0.25,
                      }}
                    />
                  </div>
                )}
              </AnimatedSection>
            ))}
          </div>

          {/* cross-cutting concerns */}
          <AnimatedSection delay={0.3} className="md:w-56">
            <p className="font-mono text-xs uppercase tracking-widest text-paper-600 dark:text-carbon-600 mb-4">
              Cross-cutting
            </p>
            <div className="space-y-2.5">
              {crossCutting.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2.5 rounded-lg border border-paper-300 dark:border-carbon-400 px-3.5 py-2.5 text-sm text-paper-700 dark:text-carbon-50"
                >
                  <Icon size={14} className="text-signal shrink-0" />
                  {label}
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
