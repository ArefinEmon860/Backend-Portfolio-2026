'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

// A small dot that tracks the mouse exactly, plus a larger ring that trails
// behind it with spring physics. The ring grows and fills in when hovering
// anything clickable (links, buttons, [data-cursor-hover]).
export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false)
  const [hovering, setHovering] = useState(false)
  const [pressed, setPressed] = useState(false)
  const [visible, setVisible] = useState(false)

  const mx = useMotionValue(-100)
  const my = useMotionValue(-100)
  const ringX = useSpring(mx, { stiffness: 260, damping: 24, mass: 0.4 })
  const ringY = useSpring(my, { stiffness: 260, damping: 24, mass: 0.4 })

  const rafRef = useRef(null)

  useEffect(() => {
    // Only enable on devices with a real mouse (skip touch/coarse pointers)
    const hasFinePointer = window.matchMedia('(pointer: fine)').matches
    if (!hasFinePointer) return

    setEnabled(true)
    document.documentElement.classList.add('has-custom-cursor')

    function handleMove(e) {
      setVisible(true)
      mx.set(e.clientX)
      my.set(e.clientY)

      if (rafRef.current) return
      rafRef.current = requestAnimationFrame(() => {
        const target = document.elementFromPoint(e.clientX, e.clientY)
        const hoverable = target?.closest(
          'a, button, [role="button"], input, textarea, [data-cursor-hover]'
        )
        setHovering(!!hoverable)
        rafRef.current = null
      })
    }

    function handleLeave() {
      setVisible(false)
    }

    function handleDown() {
      setPressed(true)
    }
    function handleUp() {
      setPressed(false)
    }

    window.addEventListener('mousemove', handleMove)
    document.addEventListener('mouseleave', handleLeave)
    window.addEventListener('mousedown', handleDown)
    window.addEventListener('mouseup', handleUp)

    return () => {
      document.documentElement.classList.remove('has-custom-cursor')
      window.removeEventListener('mousemove', handleMove)
      document.removeEventListener('mouseleave', handleLeave)
      window.removeEventListener('mousedown', handleDown)
      window.removeEventListener('mouseup', handleUp)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [mx, my])

  if (!enabled) return null

  return (
    <>
      {/* precise dot */}
      <motion.div
        className="fixed top-0 left-0 z-[999] pointer-events-none rounded-full bg-signal"
        style={{
          x: mx,
          y: my,
          width: 6,
          height: 6,
          marginLeft: -3,
          marginTop: -3,
          opacity: visible ? 1 : 0,
        }}
        animate={{ scale: pressed ? 0.6 : 1 }}
        transition={{ duration: 0.15 }}
      />

      {/* trailing ring */}
      <motion.div
        className="fixed top-0 left-0 z-[998] pointer-events-none rounded-full border border-signal"
        style={{
          x: ringX,
          y: ringY,
          opacity: visible ? 1 : 0,
        }}
        animate={{
          width: hovering ? 64 : 32,
          height: hovering ? 64 : 32,
          marginLeft: hovering ? -32 : -16,
          marginTop: hovering ? -32 : -16,
          backgroundColor: hovering ? 'rgba(108,142,255,0.12)' : 'rgba(108,142,255,0)',
          scale: pressed ? 0.85 : 1,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      />
    </>
  )
}
