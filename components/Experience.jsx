'use client'

import AnimatedSection from './AnimatedSection'
import Eyebrow from './Eyebrow'
import { experience } from '@/data/content'

export default function Experience() {
  return (
    <section id="experience" className="px-5 md:px-8 py-24 md:py-32 border-t border-paper-300 dark:border-carbon-400">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <Eyebrow>Experience</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-paper-700 dark:text-carbon-50 mb-14">
            Career history.
          </h2>
        </AnimatedSection>

        <div className="relative">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-paper-300 dark:bg-carbon-400" />

          <div className="space-y-14">
            {experience.map((job, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.08} className="relative pl-10">
                <span className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-signal bg-paper-100 dark:bg-carbon-100" />

                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                  <h3 className="text-xl font-bold text-paper-700 dark:text-carbon-50">
                    {job.role} · <span className="text-signal">{job.company}</span>
                  </h3>
                  <span className="font-mono text-xs text-paper-600 dark:text-carbon-600">
                    {job.duration}
                  </span>
                </div>

                <p className="text-sm text-paper-600 dark:text-carbon-700 mb-4 max-w-xl leading-relaxed">
                  {job.description}
                </p>

                <ul className="space-y-1.5 mb-4">
                  {job.responsibilities.map((r) => (
                    <li key={r} className="flex items-start gap-2.5 text-sm text-paper-700 dark:text-carbon-50">
                      <span className="mt-1.5 h-1 w-1 rounded-full bg-paper-600 dark:bg-carbon-600 shrink-0" />
                      {r}
                    </li>
                  ))}
                </ul>

                <p className="text-sm text-paper-600 dark:text-carbon-700 mb-4 italic">
                  {job.achievement}
                </p>

                <div className="flex flex-wrap gap-2">
                  {job.tech.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[11px] px-2.5 py-1 rounded-md border border-paper-300 dark:border-carbon-400 text-paper-600 dark:text-carbon-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
