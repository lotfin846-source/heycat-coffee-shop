'use client'

import { useEffect, useState } from 'react'

interface Particle {
  id: number
  x: number
  y: number
  size: number
  delay: number
  duration: number
  opacity: number
}

export default function SmokeParticles() {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    // Generate static particle definitions on load
    const temp: Particle[] = []
    for (let i = 0; i < 40; i++) {
      temp.push({
        id: i,
        x: Math.random() * 100, // percentage of container width
        y: Math.random() * 80 + 20, // percentage of height
        size: Math.random() * 4 + 2, // 2px to 6px
        delay: Math.random() * 10, // delay in seconds
        duration: Math.random() * 15 + 10, // duration in seconds
        opacity: Math.random() * 0.5 + 0.3,
      })
    }
    setParticles(temp)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      {/* Background soft fire glow underlays */}
      <div className="absolute -bottom-24 left-1/4 w-[40%] h-[50%] bg-luxury-fire/15 rounded-full fire-underlay" />
      <div className="absolute -bottom-16 right-1/4 w-[35%] h-[40%] bg-luxury-gold/10 rounded-full fire-underlay" />

      {/* Floating particles (embers) */}
      {particles.map((p) => {
        const animationName = p.id % 3 === 0 ? 'spark-1' : p.id % 3 === 1 ? 'spark-2' : 'spark-3'
        return (
          <div
            key={p.id}
            className="absolute bg-gradient-to-t from-luxury-fire to-luxury-gold-light rounded-full"
            style={{
              left: `${p.x}%`,
              bottom: `0%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              opacity: p.opacity,
              animation: `${animationName} ${p.duration}s infinite linear`,
              animationDelay: `${p.delay}s`,
              boxShadow: '0 0 10px rgba(255, 90, 31, 0.8), 0 0 20px rgba(212, 175, 55, 0.4)',
            }}
          />
        )
      })}
    </div>
  )
}
