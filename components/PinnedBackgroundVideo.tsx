'use client'

import { motion, useScroll, useTransform } from 'framer-motion'

export default function PinnedBackgroundVideo() {
  const { scrollYProgress } = useScroll()

  // Smooth scroll transformations for the cinematic video
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15])
  const blur = useTransform(scrollYProgress, [0, 0.4], ['blur(0px)', 'blur(8px)'])
  const darkOverlayOpacity = useTransform(scrollYProgress, [0, 0.3], [0.65, 0.9])

  return (
    <div className="fixed inset-0 -z-50 h-screen w-screen overflow-hidden bg-luxury-black select-none pointer-events-none">
      {/* Pinned Video Element */}
      <motion.div
        style={{ scale, filter: blur }}
        className="relative h-full w-full"
      >
        {/* Unsplash Backup cover image */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541832676-9b763b0239ab?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center" />

        {/* Continuous looping wood-fire video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-60 mix-blend-screen"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-fire-burning-in-a-fireplace-closeup-4663-large.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* Dynamic scrolling dark overlay to maintain readability */}
      <motion.div
        style={{ opacity: darkOverlayOpacity }}
        className="absolute inset-0 bg-luxury-black"
      />
      {/* Constant luxury side overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-luxury-black/90 via-transparent to-luxury-black/90" />
    </div>
  )
}
