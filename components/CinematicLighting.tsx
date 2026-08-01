'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function CinematicLighting() {
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    // Listen to prefers-reduced-motion media query to respect user preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduceMotion(mediaQuery.matches)

    const handleChange = (e: MediaQueryListEvent) => {
      setReduceMotion(e.matches)
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">
      {/* 1. Slow-pulsing warm fire orange/gold radial glow behind the hero title */}
      <motion.div
        animate={
          reduceMotion
            ? { opacity: 0.35 }
            : {
                opacity: [0.3, 0.48, 0.3],
                scale: [1, 1.1, 1],
              }
        }
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] max-w-[650px] max-h-[650px] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,90,31,0.22)_0%,rgba(212,175,55,0.06)_45%,transparent_70%)] filter blur-3xl will-change-transform will-change-opacity"
      />

      {/* 2. Subtle linear moving light beam sweeping diagonally across the hero */}
      <motion.div
        animate={
          reduceMotion
            ? { opacity: 0.12, x: '0%' }
            : {
                x: ['-100%', '100%'],
                opacity: [0.05, 0.18, 0.05],
              }
        }
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[linear-gradient(135deg,transparent_42%,rgba(212,175,55,0.12)_48%,rgba(212,175,55,0.25)_50%,rgba(212,175,55,0.12)_52%,transparent_58%)] rotate-12 pointer-events-none will-change-transform"
      />

      {/* 3. Soft cinematic vignette framing the viewport edges */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(9,9,9,0.55)_80%,rgba(9,9,9,0.95)_100%)] pointer-events-none" />
    </div>
  )
}
