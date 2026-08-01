'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Volume2, VolumeX } from 'lucide-react'

export default function AmbientSound() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    // Create the audio element on the client side safely
    const audio = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3') // placeholder loop backup or pure white fireplace WAV
    // Let's use a gorgeous fireplace crackle sound loop
    audio.src = 'https://assets.mixkit.co/active_storage/sfx/2433/2433-84.wav'
    audio.loop = true
    audio.volume = 0.4
    audioRef.current = audio

    // Auto show tooltip hint on load
    const timer = setTimeout(() => {
      setShowTooltip(true)
    }, 4000)

    const tooltipHideTimer = setTimeout(() => {
      setShowTooltip(false)
    }, 9000)

    return () => {
      clearTimeout(timer)
      clearTimeout(tooltipHideTimer)
      audio.pause()
    }
  }, [])

  const toggleSound = () => {
    if (!audioRef.current) return

    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(false)
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true)
        setShowTooltip(false)
      }).catch((err) => {
        console.log('Audio autoplay prevented by user interaction policy:', err)
      })
    }
  }

  return (
    <div className="fixed bottom-6 left-6 z-[99] flex items-center gap-3">
      {/* Soundwaves Indicator */}
      <AnimatePresence>
        {isPlaying && (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 0.8, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            className="flex items-end gap-[3px] h-4 px-2"
          >
            <span className="w-[2px] bg-luxury-gold rounded-full animate-[pulse_1s_infinite_alternate]" style={{ height: '60%' }} />
            <span className="w-[2px] bg-luxury-gold rounded-full animate-[pulse_0.8s_infinite_alternate_0.2s]" style={{ height: '100%' }} />
            <span className="w-[2px] bg-luxury-gold rounded-full animate-[pulse_1.2s_infinite_alternate_0.1s]" style={{ height: '40%' }} />
            <span className="w-[2px] bg-luxury-gold rounded-full animate-[pulse_0.9s_infinite_alternate_0.3s]" style={{ height: '80%' }} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main floating action button */}
      <div className="relative">
        {/* Tooltip hint */}
        <AnimatePresence>
          {showTooltip && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 10 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.9, x: 10 }}
              className="absolute left-14 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-xl bg-luxury-black/95 border border-luxury-gold/25 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-luxury-gold shadow-goldGlow backdrop-blur-md"
            >
              Experience With Sound
            </motion.div>
          )}
        </AnimatePresence>

        <button
          onClick={toggleSound}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          className="group flex h-12 w-12 items-center justify-center rounded-full border border-luxury-gold/30 bg-luxury-black/90 text-luxury-gold shadow-goldGlow backdrop-blur-md transition-all duration-500 hover:bg-luxury-gold hover:text-luxury-black hover:border-luxury-gold hover:scale-105 interactive-card"
          aria-label={isPlaying ? 'Mute Ambient Fireplace Sound' : 'Play Ambient Fireplace Sound'}
          data-cursor={isPlaying ? 'Mute' : 'Crackle'}
        >
          {isPlaying ? (
            <Volume2 className="h-4.5 w-4.5 animate-pulse-slow" />
          ) : (
            <VolumeX className="h-4.5 w-4.5" />
          )}
        </button>
      </div>
    </div>
  )
}
