'use client'

import AnimatedSection from './AnimatedSection'
import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/BrandIcons'
import { socials } from '@/data/content'

const links = [
  { icon: GithubIcon, label: 'GitHub', href: socials.github },
  { icon: LinkedinIcon, label: 'LinkedIn', href: socials.linkedin },
  { icon: Mail, label: 'Email', href: `mailto:${socials.email}` },
]

export default function SocialProof() {
  return (
    <section className="px-5 md:px-8 py-16 border-t border-paper-300 dark:border-carbon-400">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="flex flex-wrap items-center justify-center gap-4">
          {links.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-paper-300 dark:border-carbon-400 px-5 py-2.5 text-sm font-medium text-paper-600 dark:text-carbon-700 hover:text-signal hover:border-signal/40 transition-colors"
            >
              <Icon size={15} />
              {label}
            </a>
          ))}
        </AnimatedSection>
      </div>
    </section>
  )
}
