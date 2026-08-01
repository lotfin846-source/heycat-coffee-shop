'use client'

import { motion } from 'framer-motion'

export default function OurStory() {
  return (
    <section id="story" className="relative py-24 lg:py-36 bg-luxury-black overflow-hidden border-t border-luxury-charcoal">
      {/* Decorative ambient elements */}
      <div className="absolute top-1/4 left-10 h-72 w-72 rounded-full bg-luxury-brown/20 blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-16 lg:mb-24 flex flex-col items-start">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 0.6, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="text-xs uppercase tracking-[0.4em] text-luxury-gold font-semibold"
          >
            La Nostra Eredità
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-4 font-serif text-4xl font-bold tracking-tight text-luxury-cream sm:text-5xl lg:text-6xl"
          >
            The Art of Handcrafted <span className="text-gold-gradient">Heritage</span>
          </motion.h2>
          <div className="mt-6 h-[1px] w-24 bg-luxury-gold/50" />
        </div>

        {/* Editorial Layout */}
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-20 items-center">

          {/* Asymmetrical Left Side: Beautiful Story Prose */}
          <div className="lg:col-span-5 space-y-8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-serif text-xl italic leading-relaxed text-luxury-gold/90 font-light"
            >
              "An authentic Napoletana is not merely baked; it is forged. Through the perfect harmony of volcanic ash clay, living flame, and 48 hours of quiet patience."
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 0.8, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-6 text-sm md:text-base text-luxury-cream/75 leading-relaxed font-light tracking-wide"
            >
              <p>
                At <strong className="text-luxury-gold font-medium">LA FIAMMA</strong>, we honor the ancient pizza masters of Campania. Our signature dough is mixed by hand daily using only type '00' flour, natural mother yeast, and pure Italian spring water, before sleeping under watch for two entire days.
              </p>
              <p>
                When it meets our bespoke brick oven—handcrafted from Mount Vesuvius clay—it is subjected to a blistering 480°C of pure wood-fired power. In exactly sixty seconds, the wood-fire transforms simple raw elements into a charred, bubbly, pillowy masterwork of luxury texture and depth.
              </p>
            </motion.div>

            {/* Signature Block */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1, delay: 0.4 }}
              className="pt-4 flex items-center gap-4"
            >
              <div className="h-[1px] w-12 bg-luxury-gold/30" />
              <div>
                <p className="font-serif text-lg text-luxury-cream">Vincenzo Caprile</p>
                <p className="text-[10px] uppercase tracking-widest text-luxury-gold">Founder & Master Pizzaiolo</p>
              </div>
            </motion.div>
          </div>

          {/* Asymmetrical Right Side: Cinematic Image Overlaps */}
          <div className="lg:col-span-7 relative flex items-center justify-center">
            {/* Background absolute graphic frame */}
            <div className="absolute -inset-4 border border-luxury-gold/10 rounded-3xl -rotate-1 pointer-events-none" />

            {/* Primary Large Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1, cubicBezier: [0.16, 1, 0.3, 1] }}
              className="relative overflow-hidden rounded-2xl border border-luxury-charcoal shadow-2xl group w-full max-w-[550px] aspect-[4/5] interactive-card"
              data-cursor="Tradition"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/60 to-transparent z-10" />
              <img
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop"
                alt="Artisan rolling premium Neapolitan pizza dough"
                className="h-full w-full object-cover transition-transform duration-[2s] group-hover:scale-105"
              />
            </motion.div>

            {/* Secondary Floating Overlapping Card */}
            <motion.div
              initial={{ opacity: 0, x: 50, y: 50 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1.2, delay: 0.3, cubicBezier: [0.16, 1, 0.3, 1] }}
              className="absolute -bottom-8 -left-6 hidden sm:flex flex-col bg-luxury-dark/95 border border-luxury-gold/20 p-5 rounded-2xl shadow-luxury max-w-[240px] z-20 backdrop-blur-md"
            >
              <p className="text-2xl font-serif text-luxury-gold font-bold">48 Hrs</p>
              <p className="text-xs uppercase tracking-widest text-luxury-cream/80 font-semibold mt-1">Slow Proofing</p>
              <p className="text-xs text-luxury-cream/65 leading-relaxed mt-2 font-light">
                Maximizes the complexity of flavors and renders a remarkably light, digestible crust.
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
