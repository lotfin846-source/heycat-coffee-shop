'use client'

import { motion, useScroll, useSpring } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed left-0 right-0 top-0 z-[10000] h-[3px] origin-left bg-gradient-to-r from-luxury-fire via-luxury-gold to-luxury-gold-light shadow-[0_1px_10px_rgba(212,175,55,0.8)]"
    />
  )
}
