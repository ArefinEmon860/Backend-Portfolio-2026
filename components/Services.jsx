'use client'

import AnimatedSection from './AnimatedSection'
import Eyebrow from './Eyebrow'
import { services } from '@/data/content'

export default function Services() {
  return (
    <section id="services" className="px-5 md:px-8 py-24 md:py-32 border-t border-paper-300 dark:border-carbon-400">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <Eyebrow>Services</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-paper-700 dark:text-carbon-50 mb-14">
            How I can help.
          </h2>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-paper-300 dark:bg-carbon-400 rounded-2xl overflow-hidden border border-paper-300 dark:border-carbon-400">
          {services.map((service, idx) => (
            <AnimatedSection
              key={service.title}
              delay={(idx % 4) * 0.05}
              className="bg-paper-100 dark:bg-carbon-100 p-6 group hover:bg-paper-200/60 dark:hover:bg-carbon-200/60 transition-colors"
            >
              <span className="font-mono text-xs text-signal">
                {String(idx + 1).padStart(2, '0')}
              </span>
              <h3 className="text-base font-bold text-paper-700 dark:text-carbon-50 mt-3 mb-2 group-hover:text-signal transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-paper-600 dark:text-carbon-700 leading-relaxed">
                {service.description}
              </p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
