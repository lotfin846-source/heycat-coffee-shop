'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const [isMobile, setIsMobile] = useState(true)
  const [isHovered, setIsHovered] = useState(false)
  const [cursorText, setCursorText] = useState('')
  const cursorRef = useRef<HTMLDivElement>(null)

  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)

  const springConfig = { damping: 30, stiffness: 250, mass: 0.5 }
  const cursorX = useSpring(mouseX, springConfig)
  const cursorY = useSpring(mouseY, springConfig)

  useEffect(() => {
    // Check if device is mobile or touch-capable
    const checkDevice = () => {
      const mobile =
        window.matchMedia('(max-width: 768px)').matches ||
        ('ontouchstart' in window) ||
        (navigator.maxTouchPoints > 0)
      setIsMobile(mobile)
      if (!mobile) {
        document.documentElement.classList.add('custom-cursor-active')
      } else {
        document.documentElement.classList.remove('custom-cursor-active')
      }
    }

    checkDevice()
    window.addEventListener('resize', checkDevice)

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    // Handle hovering custom properties
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const clickable = target.closest('a, button, [role="button"], .interactive-card, input, select, textarea')
      const customCursorData = target.closest('[data-cursor]') as HTMLElement

      if (customCursorData) {
        setIsHovered(true)
        setCursorText(customCursorData.getAttribute('data-cursor') || '')
      } else if (clickable) {
        setIsHovered(true)
        setCursorText('')
      } else {
        setIsHovered(false)
        setCursorText('')
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseover', handleMouseOver)

    return () => {
      window.removeEventListener('resize', checkDevice)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseover', handleMouseOver)
      document.documentElement.classList.remove('custom-cursor-active')
    }
  }, [mouseX, mouseY])

  if (isMobile) return null

  return (
    <>
      {/* Primary Dot */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovered ? (cursorText ? 4.5 : 1.8) : 1,
          backgroundColor: isHovered ? 'rgba(212, 175, 55, 0.95)' : 'rgba(252, 250, 242, 1)',
        }}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.2 }}
        className="pointer-events-none fixed left-0 top-0 z-[9999] flex h-4 w-4 items-center justify-center rounded-full shadow-[0_0_15px_rgba(212,175,55,0.4)] mix-blend-difference"
      >
        {cursorText && (
          <span className="pointer-events-none text-[3px] font-bold uppercase tracking-widest text-luxury-black select-none">
            {cursorText}
          </span>
        )}
      </motion.div>

      {/* Secondary Outer Aura */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovered ? 2.5 : 1,
          opacity: isHovered ? 0.15 : 0.4,
          borderColor: isHovered ? '#ff5a1f' : '#d4af37',
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 100 }}
        className="pointer-events-none fixed left-0 top-0 z-[9998] h-10 w-10 rounded-full border border-luxury-gold"
      />
    </>
  )
}
