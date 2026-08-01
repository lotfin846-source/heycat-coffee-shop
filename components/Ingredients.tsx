'use client'

import { motion } from 'framer-motion'
import { Flame, Droplet, Sun, Shovel, Heart } from 'lucide-react'

const ingredients = [
  {
    name: 'Fresh Mozzarella',
    tag: 'FIOR DI LATTE',
    desc: 'Bespoke hand-stretched water buffalo mozzarella, flown in fresh weekly from Campania estates. Rich, velvety, and perfectly milky.',
    icon: Heart,
    glowColor: 'rgba(252, 250, 242, 0.1)',
  },
  {
    name: 'Italian Tomatoes',
    tag: 'SAN MARZANO DOP',
    desc: 'Authentic plum tomatoes grown in the volcanic soil at the foot of Mount Vesuvius. Naturally sweet, low acidity, intensely vibrant.',
    icon: Sun,
    glowColor: 'rgba(212, 175, 55, 0.15)',
  },
  {
    name: 'Wood Fire Cooked',
    tag: '480°C OAK & BEECH',
    desc: 'Sustained exclusively by seasoned local beechwood and oak, giving our crust its unique smoky aroma and signature charred blisters.',
    icon: Flame,
    glowColor: 'rgba(255, 90, 31, 0.15)',
  },
  {
    name: 'Fresh Sweet Basil',
    tag: 'ORGANIC SWEET NEAPOLITAN',
    desc: 'Grown in controlled sea-breeze glasshouses, harvested at dawn for maximum oil concentration. Intensely aromatic and crisp.',
    icon: Shovel,
    glowColor: 'rgba(52, 211, 153, 0.1)',
  },
  {
    name: 'Cold Pressed Olive Oil',
    tag: 'SICILIAN EXTRA VIRGIN',
    desc: 'First cold-pressed hand-picked olive oil from single-estate Biancolilla olives. Grassy, peppery, and incredibly luxurious.',
    icon: Droplet,
    glowColor: 'rgba(212, 175, 55, 0.15)',
  }
]

export default function Ingredients() {
  return (
    <section id="ingredients" className="relative py-24 lg:py-36 bg-luxury-black/90 overflow-hidden backdrop-blur-[2px]">
      {/* Decorative gradients */}
      <div className="absolute top-1/4 left-10 h-72 w-72 rounded-full bg-luxury-brown/10 blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-20 flex flex-col items-start max-w-2xl">
          <p className="text-xs uppercase tracking-[0.4em] text-luxury-gold font-semibold">
            La Purezza
          </p>
          <h2 className="mt-4 font-serif text-4xl font-bold tracking-tight text-luxury-cream sm:text-5xl">
            Sourced for <span className="text-gold-gradient">Connoisseurs</span>
          </h2>
          <p className="mt-4 text-xs sm:text-sm md:text-base text-luxury-cream/70 leading-relaxed tracking-wider font-light">
            We operate with zero compromises. Each of our five core ingredients is tracked directly back to its Italian soil of origin.
          </p>
          <div className="mt-6 h-[1px] w-24 bg-luxury-gold/50" />
        </div>

        {/* Horizontal & Vertical grid block */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {ingredients.map((ing, idx) => {
            const IconComponent = ing.icon
            return (
              <motion.div
                key={ing.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{
                  y: -10,
                  boxShadow: `0 15px 30px ${ing.glowColor}`,
                }}
                className="group relative flex flex-col justify-between rounded-2xl bg-luxury-charcoal/20 border border-luxury-charcoal p-6 transition-all duration-500 interactive-card"
                data-cursor="Pure"
              >
                {/* Accent glow on hover */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background: `radial-gradient(circle at top left, ${ing.glowColor}, transparent 60%)`,
                  }}
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-luxury-black border border-luxury-gold/10 text-luxury-gold group-hover:border-luxury-gold/30 transition-colors">
                    <IconComponent className="h-5 w-5" />
                  </div>

                  {/* Title & Tag */}
                  <p className="text-[9px] uppercase tracking-[0.2em] text-luxury-gold font-bold">
                    {ing.tag}
                  </p>
                  <h3 className="mt-2 font-serif text-lg font-bold text-luxury-cream group-hover:text-luxury-gold transition-colors">
                    {ing.name}
                  </h3>

                  {/* Description */}
                  <p className="mt-4 text-xs text-luxury-cream/60 leading-relaxed font-light tracking-wide">
                    {ing.desc}
                  </p>
                </div>

                <div className="relative z-10 mt-6 pt-4 border-t border-luxury-charcoal/30 flex items-center gap-1">
                  <span className="text-[8px] font-bold tracking-widest text-luxury-gold uppercase">100% Certified</span>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
