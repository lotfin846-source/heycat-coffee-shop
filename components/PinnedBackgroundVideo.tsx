'use client'

import { motion, useScroll, useTransform } from 'framer-motion'

export default function PinnedBackgroundVideo() {
  const { scrollYProgress } = useScroll()

  // Scroll-driven physical camera rig simulator (zooms in, pans slightly right, tilts)
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.25])
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, 4])
  const translateY = useTransform(scrollYProgress, [0, 1], ['0%', '8%'])
  const blur = useTransform(scrollYProgress, [0, 0.4, 1], ['blur(0px)', 'blur(6px)', 'blur(12px)'])

  // Continuous dimming down as reader enters text-heavy editorial sections
  const darkOverlayOpacity = useTransform(scrollYProgress, [0, 0.25, 0.8], [0.55, 0.88, 0.95])

  return (
    <div className="fixed inset-0 -z-50 h-screen w-screen overflow-hidden bg-luxury-black select-none pointer-events-none perspective-[1000px]">
      {/* 3D Camera Rig wrapper */}
      <motion.div
        style={{
          scale,
          rotateX,
          y: translateY,
          filter: blur,
          transformStyle: 'preserve-3d'
        }}
        className="relative h-full w-full"
      >
        {/* Unsplash Backup high-end Neapolitan brick oven background */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541832676-9b763b0239ab?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center" />

        {/* Continuous looping wood-fire video stream */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-65 mix-blend-screen"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-fire-burning-in-a-fireplace-closeup-4663-large.mp4" type="video/mp4" />
        </video>

        {/* Volumetric volumetric lighting beams (faint golden dramatic rays) */}
        <div className="absolute inset-0 bg-gradient-to-tr from-luxury-gold/5 via-transparent to-luxury-fire/10 opacity-60 mix-blend-color-dodge animate-pulse-slow" />

        {/* Diagonal volumetric light shaft */}
        <div
          className="absolute -top-1/4 -left-1/4 w-[150%] h-[150%] bg-[linear-gradient(135deg,rgba(212,175,55,0.06)_0%,transparent_50%)] pointer-events-none transform rotate-12"
          style={{ mixBlendMode: 'screen' }}
        />
      </motion.div>

      {/* Dynamic dark screen layer to keep typography readable */}
      <motion.div
        style={{ opacity: darkOverlayOpacity }}
        className="absolute inset-0 bg-[#090909]"
      />

      {/* Constant luxury vignetting and side overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-luxury-black/95 via-transparent to-luxury-black/95" />
      <div className="absolute inset-0 bg-gradient-to-b from-luxury-black/60 via-transparent to-luxury-black/95" />
    </div>
  )
}
