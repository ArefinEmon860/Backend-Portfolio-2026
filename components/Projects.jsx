'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, X, Layers } from 'lucide-react'
import { GithubIcon } from '@/components/BrandIcons'
import AnimatedSection from './AnimatedSection'
import Eyebrow from './Eyebrow'
import { projects } from '@/data/content'

export default function Projects() {
  const [active, setActive] = useState(null)

  return (
    <section id="projects" className="px-5 md:px-8 py-24 md:py-32 border-t border-paper-300 dark:border-carbon-400">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <Eyebrow>Selected Work</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-paper-700 dark:text-carbon-50 mb-14">
            Projects &amp; case studies.
          </h2>
        </AnimatedSection>

        <div className="space-y-6">
          {projects.map((project, idx) => (
            <AnimatedSection key={project.name} delay={idx * 0.06}>
              <button
                onClick={() => setActive(project)}
                className="group w-full text-left rounded-2xl border border-paper-300 dark:border-carbon-400 p-6 md:p-8 hover:border-signal/40 transition-colors relative overflow-hidden"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-r from-signal/[0.04] to-transparent" />
                <div className="relative flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="font-mono text-xs text-paper-600 dark:text-carbon-600">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <span className="h-px w-6 bg-paper-300 dark:bg-carbon-400" />
                      <span className="font-mono text-xs text-signal uppercase tracking-wide">
                        Backend Case Study
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-paper-700 dark:text-carbon-50 mb-2 group-hover:text-signal transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-sm text-paper-600 dark:text-carbon-700 leading-relaxed max-w-2xl mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-paper-200 dark:bg-carbon-300 text-paper-600 dark:text-carbon-700"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex md:flex-col items-center md:items-end gap-3 shrink-0">
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-paper-700 dark:text-carbon-50 group-hover:text-signal transition-colors">
                      View case study
                      <ArrowUpRight
                        size={16}
                        className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </span>
                  </div>
                </div>
              </button>
            </AnimatedSection>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-8"
          >
            <div
              className="absolute inset-0 bg-carbon-100/70 backdrop-blur-sm"
              onClick={() => setActive(null)}
            />
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl border border-paper-300 dark:border-carbon-400 bg-paper-100 dark:bg-carbon-100 p-7 md:p-9"
            >
              <button
                onClick={() => setActive(null)}
                className="absolute top-5 right-5 w-8 h-8 grid place-items-center rounded-lg border border-paper-300 dark:border-carbon-400 text-paper-600 dark:text-carbon-700 hover:text-signal transition-colors"
              >
                <X size={16} />
              </button>

              <span className="font-mono text-xs text-signal uppercase tracking-wide">
                Case Study
              </span>
              <h3 className="text-2xl font-bold text-paper-700 dark:text-carbon-50 mt-2 mb-5 pr-10">
                {active.name}
              </h3>

              <div className="space-y-5">
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-paper-600 dark:text-carbon-600 mb-2">
                    Problem
                  </p>
                  <p className="text-sm text-paper-600 dark:text-carbon-700 leading-relaxed">
                    {active.problem}
                  </p>
                </div>

                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-paper-600 dark:text-carbon-600 mb-2">
                    Key Features
                  </p>
                  <ul className="space-y-1.5">
                    {active.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-paper-700 dark:text-carbon-50">
                        <span className="mt-1.5 h-1 w-1 rounded-full bg-signal shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-paper-600 dark:text-carbon-600 mb-2 flex items-center gap-1.5">
                    <Layers size={12} /> Architecture
                  </p>
                  <p className="font-mono text-xs text-paper-600 dark:text-carbon-700 leading-relaxed bg-paper-200 dark:bg-carbon-200 rounded-lg p-3 border border-paper-300 dark:border-carbon-400">
                    {active.architecture}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {active.tech.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[11px] px-2.5 py-1 rounded-md border border-paper-300 dark:border-carbon-400 text-paper-600 dark:text-carbon-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  <a
                    href={active.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-paper-300 dark:border-carbon-400 px-4 py-2.5 text-sm font-semibold text-paper-700 dark:text-carbon-50 hover:border-signal/40 hover:text-signal transition-colors"
                  >
                    <GithubIcon size={14} /> GitHub
                  </a>
                  <a
                    href={active.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg bg-signal text-carbon-100 px-4 py-2.5 text-sm font-semibold hover:opacity-90 transition-opacity"
                  >
                    Live Demo <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
