'use client'

import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/BrandIcons'
import { profile, socials } from '@/data/content'

export default function Footer() {
  return (
    <footer className="px-5 md:px-8 py-10 border-t border-paper-300 dark:border-carbon-400">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-center sm:text-left">
          <p className="font-mono text-sm font-semibold text-paper-700 dark:text-carbon-50">
            {profile.name}
          </p>
          <p className="text-xs text-paper-600 dark:text-carbon-700 mt-0.5">
            {profile.tagline}
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a href={socials.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-paper-600 dark:text-carbon-700 hover:text-signal transition-colors">
            <GithubIcon size={17} />
          </a>
          <a href={socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-paper-600 dark:text-carbon-700 hover:text-signal transition-colors">
            <LinkedinIcon size={17} />
          </a>
          <a href={`mailto:${socials.email}`} aria-label="Email" className="text-paper-600 dark:text-carbon-700 hover:text-signal transition-colors">
            <Mail size={17} />
          </a>
        </div>

        <div className="text-center sm:text-right">
          <p className="text-xs text-paper-600 dark:text-carbon-600">
            © {new Date().getFullYear()} {profile.name}
          </p>
          <p className="font-mono text-[11px] text-paper-600 dark:text-carbon-600 mt-0.5">
            {/* Built with React, Tailwind &amp; Framer Motion */}
          </p>
        </div>
      </div>
    </footer>
  )
}
