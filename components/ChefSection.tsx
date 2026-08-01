'use client'

import { motion } from 'framer-motion'
import { Award, Star, Quote } from 'lucide-react'

export default function ChefSection() {
  return (
    <section id="chef" className="relative py-24 lg:py-36 bg-luxury-dark/95 overflow-hidden border-b border-luxury-charcoal backdrop-blur-[2px]">
      {/* Dynamic fire glowing spheres */}
      <div className="absolute top-1/2 right-1/4 h-[400px] w-[400px] rounded-full bg-luxury-fire/5 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-20 items-center">

          {/* Left Side: Chef Portrait with gold border framing */}
          <div className="lg:col-span-6 relative">
            <div className="absolute -inset-4 border border-luxury-gold/15 rounded-3xl rotate-1 pointer-events-none" />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1.2, cubicBezier: [0.16, 1, 0.3, 1] }}
              className="relative overflow-hidden rounded-2xl border border-luxury-charcoal shadow-2xl group interactive-card"
              data-cursor="Mastro"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-transparent to-transparent z-10 opacity-70" />
              <img
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=1200&auto=format&fit=crop"
                alt="Luxury Master Chef Vincenzo Caprile preparing gourmet dishes"
                className="h-full w-full object-cover aspect-[4/5] transition-transform duration-[2s] group-hover:scale-105"
              />

              {/* Floating Award Banner inside image */}
              <div className="absolute bottom-6 left-6 z-20 flex items-center gap-3 rounded-xl bg-luxury-black/90 p-4 border border-luxury-gold/20 backdrop-blur-md">
                <div className="rounded-full bg-luxury-gold/10 p-2 text-luxury-gold">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-luxury-cream">Michelin Starred</p>
                  <p className="text-[9px] text-luxury-gold tracking-wider mt-0.5">Gastronomy Masterpiece 2023</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Narrative & Animated Typography */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 0.6, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-xs uppercase tracking-[0.4em] text-luxury-gold font-semibold"
              >
                Il Maestro Pizzaiolo
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-serif text-4xl font-bold tracking-tight text-luxury-cream sm:text-5xl"
              >
                Vincenzo <span className="text-gold-gradient">Caprile</span>
              </motion.h2>
              <div className="h-[1.5px] w-16 bg-luxury-gold/50" />
            </div>

            {/* Quote block */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative bg-luxury-black/40 border-l-[3px] border-luxury-gold p-6 rounded-r-2xl"
            >
              <Quote className="absolute right-4 top-4 h-8 w-8 text-luxury-gold/10 pointer-events-none" />
              <p className="font-serif text-base italic leading-relaxed text-luxury-cream/90 font-light">
                "We do not make luxury pizzas to show off, but to convey a sensory journey that honors Campania's pristine soil. To bite into LA FIAMMA is to taste fire, volcanic heat, and the gentle wind of Amalfi."
              </p>
            </motion.div>

            {/* Story text */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 0.8, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-4 text-xs sm:text-sm md:text-base text-luxury-cream/75 leading-relaxed font-light tracking-wide"
            >
              <p>
                Chef Vincenzo Caprile started his culinary path in the cobblestone alleys of Napoli, learning secrets passed down through four generations. After earning stars in Europe's most refined luxury restaurants, he returned to his ultimate passion: the wood-fired pizza oven.
              </p>
              <p>
                By blending haute-gastronomy ingredients—like hand-massaged white truffle butter, gold-dusted basil, and aged cured meats—with ancient sourdough, he has crafted a dining experience that feels intimate, expensive, and completely unparalleled.
              </p>
            </motion.div>

            {/* Accolades list */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
              className="grid grid-cols-3 gap-4 pt-6 border-t border-luxury-charcoal"
            >
              <div className="text-center sm:text-left">
                <p className="font-serif text-2xl font-bold text-luxury-gold">40+</p>
                <p className="text-[9px] uppercase tracking-wider text-luxury-cream/60 mt-1">Years Devoted</p>
              </div>
              <div className="text-center sm:text-left">
                <p className="font-serif text-2xl font-bold text-luxury-gold">3</p>
                <p className="text-[9px] uppercase tracking-wider text-luxury-cream/60 mt-1">Michelin Stars</p>
              </div>
              <div className="text-center sm:text-left">
                <p className="font-serif text-2xl font-bold text-luxury-gold">100%</p>
                <p className="text-[9px] uppercase tracking-wider text-luxury-cream/60 mt-1">Sourdough</p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
