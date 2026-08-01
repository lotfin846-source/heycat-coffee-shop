'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import SmokeParticles from './SmokeParticles'

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)

  // Create beautiful parallax scroll effects
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  })

  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-luxury-black"
    >
      {/* Cinematic Background Media Container with Parallax */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 h-full w-full select-none"
      >
        {/* Background Loop Video (Cinematic fire / artisan dough) */}
        {/* We use a high quality unspash background as backup and overlay video */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541832676-9b763b0239ab?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center" />

        {/* Fallback/Overlay HTML5 Video for supreme live ambiance */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-60 mix-blend-screen pointer-events-none"
        >
          {/* Loop of dark ambient embers / sparks or wood-fire */}
          <source src="https://assets.mixkit.co/videos/preview/mixkit-fire-burning-in-a-fireplace-closeup-4663-large.mp4" type="video/mp4" />
        </video>

        {/* Deep, dramatic, high-contrast dark overlay gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/60 to-luxury-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-luxury-black/90 via-transparent to-luxury-black/90" />
      </motion.div>

      {/* Embedded Ember particles & fireplace glow effects */}
      <SmokeParticles />

      {/* Cinematic Content */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-20 flex flex-col items-center px-6 text-center"
      >
        {/* Soft fire glow header badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="mb-6 flex items-center gap-3 rounded-full border border-luxury-gold/25 bg-luxury-gold/5 px-6 py-2 shadow-goldGlow backdrop-blur-md"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-luxury-fire animate-pulse-slow" />
          <span className="text-[10px] font-semibold tracking-[0.4em] text-luxury-gold uppercase">
            Dal 1984 Roma
          </span>
        </motion.div>

        {/* Massive Luxury Heading */}
        <h1 className="relative flex flex-col items-center font-serif text-[11vw] font-bold leading-[1.0] tracking-tight sm:text-[9vw] lg:text-[7vw]">
          <motion.span
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-luxury-cream/95"
          >
            AUTHENTIC
          </motion.span>
          <motion.span
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-gold-gradient"
          >
            ITALIAN
          </motion.span>
          <motion.span
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-luxury-cream/95"
          >
            PIZZA
          </motion.span>
        </h1>

        {/* Elegant handcrafted description */}
        <motion.p
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.5 }}
          className="mt-8 max-w-xl text-sm font-light leading-relaxed tracking-wider text-luxury-cream/70 sm:text-base md:max-w-2xl"
        >
          Handcrafted dough, naturally proofed for forty-eight hours, stone baked at 480°C in our bespoke wood-fired ovens. Pure Neapolitan heritage redefined for the refined modern palate.
        </motion.p>

        {/* Premium CTA Buttons */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.7 }}
          className="mt-12 flex flex-col gap-4 sm:flex-row sm:gap-6"
        >
          <a
            href="#menu"
            className="group relative overflow-hidden rounded-full bg-gradient-to-r from-luxury-gold to-luxury-gold-dark px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-luxury-black transition-all duration-500 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]"
            data-cursor="Taste"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            <span className="relative z-10">Explore Our Menu</span>
          </a>
          <a
            href="#reservations"
            className="group relative overflow-hidden rounded-full border border-luxury-cream/20 bg-luxury-cream/5 px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-luxury-cream transition-all duration-500 hover:bg-luxury-cream/10 hover:border-luxury-gold/50"
            data-cursor="Reserve"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#reservations')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            <span className="relative z-10 transition-colors group-hover:text-luxury-gold">
              Reserve A Table
            </span>
          </a>
        </motion.div>
      </motion.div>

      {/* Animated Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 z-20 flex flex-col items-center"
      >
        <span className="text-[9px] font-semibold tracking-[0.4em] text-luxury-gold uppercase mb-3">
          Scroll to explore
        </span>
        <div className="relative h-12 w-6 rounded-full border border-luxury-gold/30">
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            className="absolute left-1/2 top-2 h-2 w-1.5 -translate-x-1/2 rounded-full bg-luxury-gold"
          />
        </div>
      </motion.div>
    </section>
  )
}
