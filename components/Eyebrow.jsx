'use client'

export default function Eyebrow({ children }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="h-px w-8 bg-signal/60" />
      <span className="font-mono text-xs tracking-[0.2em] uppercase text-signal">
        {children}
      </span>
    </div>
  )
}
