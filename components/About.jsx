'use client'

import AnimatedSection from './AnimatedSection'
import Eyebrow from './Eyebrow'
import Counter from './Counter'
import { about, profile } from '@/data/content'
import { MapPin } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="px-5 md:px-8 py-24 md:py-32">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <Eyebrow>About</Eyebrow>
        </AnimatedSection>

        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-16">
          <div>
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-paper-700 dark:text-carbon-50 mb-6 leading-snug">
                {profile.summary}
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.08}>
              <p className="text-paper-600 dark:text-carbon-700 text-base leading-relaxed mb-8 max-w-xl">
                {about.philosophy}
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.14}>
              <div className="mb-10">
                <p className="font-mono text-xs uppercase tracking-widest text-paper-600 dark:text-carbon-600 mb-3">
                  What I specialize in
                </p>
                <ul className="space-y-2.5">
                  {about.specialties.map((s) => (
                    <li key={s} className="flex items-start gap-3 text-paper-700 dark:text-carbon-50 text-sm">
                      <span className="mt-2 h-1 w-1 rounded-full bg-signal shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-paper-600 dark:text-carbon-700">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin size={14} className="text-signal" />
                  {profile.location}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-pulseSoft absolute inline-flex h-full w-full rounded-full bg-emerald-400" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
                  </span>
                  {profile.availability}
                </span>
              </div>
            </AnimatedSection>
          </div>

          {/* stats grid */}
          <AnimatedSection delay={0.1}>
            <div className="grid grid-cols-2 gap-4">
              {about.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-paper-300 dark:border-carbon-400 p-5 hover:border-signal/40 transition-colors"
                >
                  <div className="text-3xl md:text-4xl font-bold text-paper-700 dark:text-carbon-50 mb-1.5">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-xs text-paper-600 dark:text-carbon-700 leading-snug">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
