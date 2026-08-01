'use client'

import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

const signaturePizzas = [
  {
    id: 1,
    name: 'Tartufo Reale',
    tag: 'ROYAL TRUFFLE',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800&auto=format&fit=crop',
    description: 'Black truffle cream, fior di latte, wild forest porcini, 24-month aged San Daniele prosciutto, shaved Umbrian truffle, finished with edible 24k gold leaf.',
    price: '$34',
    features: ['Umber Truffle', '24k Gold Leaf'],
  },
  {
    id: 2,
    name: 'La Diavola d\'Oro',
    tag: 'SPICY HEAVEN',
    image: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?q=80&w=800&auto=format&fit=crop',
    description: 'San Marzano DOP tomatoes, fresh mozzarella, authentic spicy Calabrian \'Nduja, hot honey drizzle, organic chili threads, and organic local sweet basil.',
    price: '$29',
    features: ['Calabrian Nduja', 'Hot Honey'],
  },
  {
    id: 3,
    name: 'Figo & Caprino',
    tag: 'GOURMET SWEET & SAVORY',
    image: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?q=80&w=800&auto=format&fit=crop',
    description: 'Artisanal local goat cheese, sweet caramelized black figs, slow-roasted white onions, aged Modena balsamic reduction, premium hand-pressed virgin olive oil.',
    price: '$31',
    features: ['Black Figs', 'Aged Balsamic'],
  }
]

export default function SignaturePizzas() {
  return (
    <section id="signature" className="relative py-24 lg:py-36 bg-luxury-dark/95 overflow-hidden backdrop-blur-[2px]">
      {/* Decorative luxury fire glow overlay */}
      <div className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-luxury-fire/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-10 left-1/3 h-96 w-96 rounded-full bg-luxury-gold/5 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-20 text-center flex flex-col items-center">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 0.6, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs uppercase tracking-[0.4em] text-luxury-gold font-semibold"
          >
            I Capolavori
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-4 font-serif text-4xl font-bold tracking-tight text-luxury-cream sm:text-5xl"
          >
            Signature <span className="text-gold-gradient">Pizzas</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 0.7, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 max-w-xl text-sm text-luxury-cream/65 leading-relaxed tracking-wider font-light"
          >
            Explore our curated masterpieces, where century-old Italian techniques meet world-class gastronomy.
          </motion.p>
          <div className="mt-6 h-[1px] w-24 bg-luxury-gold/50" />
        </div>

        {/* Pizza Cards Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {signaturePizzas.map((pizza, index) => (
            <motion.div
              key={pizza.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: index * 0.15, cubicBezier: [0.16, 1, 0.3, 1] }}
              whileHover={{
                y: -15,
                boxShadow: '0 25px 50px -12px rgba(212, 175, 55, 0.15)',
              }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-luxury-black border border-luxury-charcoal p-4 transition-all duration-500 interactive-card hover:border-luxury-gold/40"
              data-cursor="Discover"
            >
              <div>
                {/* Image Wrapper */}
                <div className="relative overflow-hidden rounded-2xl aspect-square w-full bg-luxury-charcoal">
                  <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/90 via-transparent to-transparent z-10 opacity-60" />

                  {/* Floating Luxury Tag */}
                  <div className="absolute left-4 top-4 z-20 flex items-center gap-1.5 rounded-full bg-luxury-black/80 px-3.5 py-1.5 border border-luxury-gold/20 backdrop-blur-md">
                    <Sparkles className="h-3 w-3 text-luxury-gold" />
                    <span className="text-[8px] font-bold tracking-[0.2em] text-luxury-gold">
                      {pizza.tag}
                    </span>
                  </div>

                  <img
                    src={pizza.image}
                    alt={pizza.name}
                    className="h-full w-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                  />
                </div>

                {/* Card Info Content */}
                <div className="mt-6 px-2">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-serif text-2xl font-bold text-luxury-cream transition-colors group-hover:text-luxury-gold">
                      {pizza.name}
                    </h3>
                    <div className="h-[1px] flex-grow bg-luxury-gold/15" />
                    <span className="font-serif text-2xl font-semibold text-luxury-gold">
                      {pizza.price}
                    </span>
                  </div>

                  <p className="mt-4 text-xs sm:text-sm text-luxury-cream/70 leading-relaxed font-light tracking-wide min-h-[72px]">
                    {pizza.description}
                  </p>
                </div>
              </div>

              {/* Pizza Card Footer (Luxury Tag Pills & Action button) */}
              <div className="mt-6 px-2 pb-2">
                <div className="flex flex-wrap gap-2 mb-4">
                  {pizza.features.map((f) => (
                    <span key={f} className="text-[9px] uppercase tracking-wider text-luxury-gold-muted bg-luxury-gold/5 px-2.5 py-1 rounded-full border border-luxury-gold/10">
                      {f}
                    </span>
                  ))}
                </div>

                <a
                  href="#reservations"
                  className="flex items-center justify-center w-full rounded-xl border border-luxury-gold/20 py-3 text-[10px] font-bold uppercase tracking-widest text-luxury-gold transition-all duration-500 hover:bg-luxury-gold hover:text-luxury-black hover:border-luxury-gold"
                  onClick={(e) => {
                    e.preventDefault()
                    document.querySelector('#reservations')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  Order In-House
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
