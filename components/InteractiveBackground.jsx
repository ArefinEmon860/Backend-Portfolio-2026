'use client'

import { useEffect, useRef } from 'react'

export default function InteractiveBackground() {
  const glowRef = useRef(null)

  useEffect(() => {
    let raf = null
    let mx = 0
    let my = 0

    function handleMove(e) {
      mx = e.clientX
      my = e.clientY
      if (raf) return
      raf = requestAnimationFrame(() => {
        if (glowRef.current) {
          glowRef.current.style.transform = `translate3d(${mx - 250}px, ${my - 250}px, 0)`
        }
        raf = null
      })
    }

    window.addEventListener('mousemove', handleMove)
    return () => {
      window.removeEventListener('mousemove', handleMove)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* base grid */}
      <div
        className="absolute inset-0 opacity-[0.05] dark:opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          color: 'var(--grid-color, #6B6D74)',
        }}
      />
      {/* cursor glow */}
      <div
        ref={glowRef}
        className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full blur-[120px] opacity-[0.08] dark:opacity-[0.12] hidden md:block"
        style={{ background: 'radial-gradient(circle, #6C8EFF 0%, transparent 70%)' }}
      />
      {/* fixed ambient glow, top right */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full blur-[140px] opacity-[0.05] dark:opacity-[0.08] bg-signal" />

      {/* slow floating ambient orb, bottom left */}
      <div className="absolute -bottom-32 -left-32 w-[420px] h-[420px] rounded-full blur-[120px] opacity-[0.04] dark:opacity-[0.06] bg-signal animate-[floaty_14s_ease-in-out_infinite]" />

      <style jsx>{`
        @keyframes floaty {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(30px, -40px); }
        }
      `}</style>
    </div>
  )
}
