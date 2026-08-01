'use client'

import { useEffect, useRef } from 'react'

interface Spark {
  x: number
  y: number
  size: number
  speedY: number
  speedX: number
  opacity: number
  fadeSpeed: number
  windOffset: number
  color: string
}

export default function CinematicAtmosphere() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number
    let sparks: Spark[] = []
    const colors = [
      'rgba(255, 90, 31, 0.75)',  // Fire orange
      'rgba(212, 175, 55, 0.75)',  // Gold
      'rgba(255, 140, 0, 0.65)',   // Dark orange
      'rgba(255, 223, 128, 0.8)'   // Cream white glow
    ]

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Populate initial sparks
    for (let i = 0; i < 45; i++) {
      sparks.push(createSpark(true))
    }

    function createSpark(randomY = false): Spark {
      return {
        x: Math.random() * (canvas?.width || 1200),
        y: randomY ? Math.random() * (canvas?.height || 800) : (canvas?.height || 800) + 10,
        size: Math.random() * 3.2 + 0.8, // delicate size
        speedY: -(Math.random() * 1.5 + 0.8), // rising up
        speedX: Math.random() * 0.8 - 0.4,
        opacity: Math.random() * 0.7 + 0.3,
        fadeSpeed: Math.random() * 0.003 + 0.001,
        windOffset: Math.random() * 100,
        color: colors[Math.floor(Math.random() * colors.length)]
      }
    }

    const animate = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Render & Update sparks
      for (let i = 0; i < sparks.length; i++) {
        const s = sparks[i]

        // Horizontal drift simulating thermal draft currents
        const wind = Math.sin(time * 0.001 + s.windOffset) * 0.3
        s.x += s.speedX + wind
        s.y += s.speedY
        s.opacity -= s.fadeSpeed

        // Draw spark with outer glowing aura
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2)
        ctx.fillStyle = s.color
        ctx.shadowBlur = 10
        ctx.shadowColor = s.color
        ctx.fill()

        // Recycle dead sparks
        if (s.opacity <= 0 || s.y < -10 || s.x < -10 || s.x > canvas.width + 10) {
          sparks[i] = createSpark()
        }
      }

      // Reset shadows for next rendering run to optimize performance
      ctx.shadowBlur = 0

      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <>
      {/* High performance sparks canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-10 w-full h-full"
      />

      {/* SVG Turbulence Filter for Heat Distortion */}
      <svg className="hidden pointer-events-none absolute w-0 h-0" aria-hidden="true">
        <defs>
          <filter id="heat-wave">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.01 0.05"
              numOctaves="2"
              result="noise"
            >
              <animate
                attributeName="baseFrequency"
                values="0.01 0.05; 0.015 0.08; 0.01 0.05"
                dur="4s"
                repeatCount="indefinite"
              />
            </feTurbulence>
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="4"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>
    </>
  )
}
