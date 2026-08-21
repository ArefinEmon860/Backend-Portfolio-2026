'use client'

import { motion } from 'framer-motion'

export default function AnimatedSection({ children, className = '', delay = 0, as = 'div', id }) {
  const Comp = motion[as] || motion.div
  return (
    <Comp
      id={id}
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </Comp>
  )
}
