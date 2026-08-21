'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedSection from './AnimatedSection'
import Eyebrow from './Eyebrow'
import { skillGroups } from '@/data/content'

export default function Skills() {
  const [activeGroup, setActiveGroup] = useState(skillGroups[0].id)
  const [hovered, setHovered] = useState(null)

  const group = skillGroups.find((g) => g.id === activeGroup)

  return (
    <section id="skills" className="px-5 md:px-8 py-24 md:py-32 border-t border-paper-300 dark:border-carbon-400">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <Eyebrow>Tech Stack</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-paper-700 dark:text-carbon-50 mb-10">
            What I build with.
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.08}>
          <div className="flex flex-wrap gap-2 mb-8">
            {skillGroups.map((g) => (
              <button
                key={g.id}
                onClick={() => setActiveGroup(g.id)}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium font-mono transition-colors ${
                  activeGroup === g.id
                    ? 'text-carbon-100 dark:text-carbon-100'
                    : 'text-paper-600 dark:text-carbon-700 hover:text-paper-700 dark:hover:text-carbon-50'
                }`}
              >
                {activeGroup === g.id && (
                  <motion.span
                    layoutId="skill-tab"
                    className="absolute inset-0 bg-signal rounded-lg -z-10"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
                {g.label}
              </button>
            ))}
          </div>
        </AnimatedSection>

        <div className="rounded-2xl border border-paper-300 dark:border-carbon-400 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeGroup}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              {group.skills.map((skill, idx) => (
                <div
                  key={skill.name}
                  onMouseEnter={() => setHovered(skill.name)}
                  onMouseLeave={() => setHovered(null)}
                  className={`group relative flex items-center justify-between px-6 py-5 cursor-default transition-colors ${
                    idx !== group.skills.length - 1 ? 'border-b border-paper-300 dark:border-carbon-400' : ''
                  } hover:bg-paper-200/50 dark:hover:bg-carbon-200/50`}
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs text-paper-600 dark:text-carbon-600 w-6">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <span className="text-lg md:text-xl font-semibold text-paper-700 dark:text-carbon-50 group-hover:text-signal transition-colors">
                      {skill.name}
                    </span>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="hidden sm:inline font-mono text-xs text-paper-600 dark:text-carbon-600">
                      {skill.level}
                    </span>
                    <motion.span
                      animate={{ x: hovered === skill.name ? 0 : 8, opacity: hovered === skill.name ? 1 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="hidden md:block text-xs text-paper-600 dark:text-carbon-700 max-w-[240px] text-right"
                    >
                      {skill.note}
                    </motion.span>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
