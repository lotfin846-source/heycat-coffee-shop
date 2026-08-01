'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const reviews = [
  {
    name: 'Olivia Sterling',
    title: 'Vogue Gastronomy Columnist',
    quote: 'An absolute masterclass in culinary elegance. The Tartufo Reale is not merely pizza; it is a profound sensory journey that redefines modern Italian dining. Simply sublime.',
    rating: 5,
  },
  {
    name: 'Chef Marco Cavallo',
    title: 'La Cucina Italiana Critic',
    quote: 'Vincenzo Caprile has achieved what many deemed impossible: honoring the ancient soul of Napoli sourdough while lifting it to the heights of ultra-premium global luxury.',
    rating: 5,
  },
  {
    name: 'Julian de Beaufort',
    title: 'Aesthetic & Style Magazine',
    quote: 'The atmospheric scent of wood-fire, the understated gold interior, and the unbelievable pillowy texture of the crust. Everything about LA FIAMMA feels exceptionally expensive.',
    rating: 5,
  }
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 lg:py-36 bg-luxury-black overflow-hidden border-t border-luxury-charcoal">
      {/* Soft warm glow background */}
      <div className="absolute top-1/2 left-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-luxury-fire/5 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-12 relative z-10">

        {/* Section Header */}
        <div className="mb-20 text-center flex flex-col items-center">
          <p className="text-xs uppercase tracking-[0.4em] text-luxury-gold font-semibold">
            Le Recensioni
          </p>
          <h2 className="mt-4 font-serif text-4xl font-bold tracking-tight text-luxury-cream sm:text-5xl">
            The Connoisseurs’ <span className="text-gold-gradient">Verdict</span>
          </h2>
          <div className="mt-6 h-[1px] w-24 bg-luxury-gold/50" />
        </div>

        {/* Testimonials Grid Layout */}
        <div className="grid gap-8 md:grid-cols-3">
          {reviews.map((rev, idx) => (
            <motion.div
              key={rev.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              whileHover={{ y: -5 }}
              className="relative flex flex-col justify-between rounded-2xl bg-luxury-charcoal/20 border border-luxury-charcoal p-8 transition-all duration-500 interactive-card"
              data-cursor="Critique"
            >
              {/* Top Row: Quote Marks & Rating */}
              <div className="flex items-center justify-between">
                <Quote className="h-8 w-8 text-luxury-gold/20" />
                <div className="flex gap-1">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-luxury-gold text-luxury-gold" />
                  ))}
                </div>
              </div>

              {/* Quote text */}
              <p className="mt-8 font-serif text-base italic leading-relaxed text-luxury-cream/85 font-light">
                "{rev.quote}"
              </p>

              {/* Author info */}
              <div className="mt-8 pt-6 border-t border-luxury-charcoal/30 flex flex-col">
                <span className="font-serif text-lg font-bold text-luxury-cream transition-colors group-hover:text-luxury-gold">
                  {rev.name}
                </span>
                <span className="text-[10px] uppercase tracking-wider text-luxury-gold mt-1">
                  {rev.title}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
