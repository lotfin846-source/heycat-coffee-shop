'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ZoomIn } from 'lucide-react'

const galleryImages = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1200&auto=format&fit=crop',
    title: 'The Perfect Crust',
    subtitle: 'Blistered sourdough Neapolitan',
    aspect: 'aspect-[4/5]',
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?q=80&w=1200&auto=format&fit=crop',
    title: 'Living Embers',
    subtitle: 'Mount Vesuvius clay oven fire',
    aspect: 'aspect-square',
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop',
    title: 'Prepping the Dough',
    subtitle: '48-hour slow proofing process',
    aspect: 'aspect-[3/4]',
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=1200&auto=format&fit=crop',
    title: 'Gourmet Ingredients',
    subtitle: 'Buffalo mozzarella & basil DOP',
    aspect: 'aspect-[4/3]',
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?q=80&w=1200&auto=format&fit=crop',
    title: 'The Golden Slice',
    subtitle: 'Melted fior di latte & hot honey',
    aspect: 'aspect-[3/4]',
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=1200&auto=format&fit=crop',
    title: 'Bespoke Dining Room',
    subtitle: 'Understated luxury ambience',
    aspect: 'aspect-square',
  }
]

export default function Gallery() {
  const [activeImage, setActiveImage] = useState<string | null>(null)

  return (
    <section id="gallery" className="relative py-24 lg:py-36 bg-luxury-dark/95 overflow-hidden border-t border-luxury-charcoal backdrop-blur-[2px]">
      {/* Dynamic fire glowing spheres */}
      <div className="absolute top-1/3 right-10 h-80 w-80 rounded-full bg-luxury-gold/5 blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-20 text-center flex flex-col items-center">
          <p className="text-xs uppercase tracking-[0.4em] text-luxury-gold font-semibold">
            La Galleria
          </p>
          <h2 className="mt-4 font-serif text-4xl font-bold tracking-tight text-luxury-cream sm:text-5xl">
            Cinematic <span className="text-gold-gradient">Moments</span>
          </h2>
          <div className="mt-6 h-[1px] w-24 bg-luxury-gold/50" />
        </div>

        {/* Masonry/Grid Layout */}
        <div className="columns-1 gap-6 sm:columns-2 lg:columns-3 space-y-6">
          {galleryImages.map((img, idx) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: idx * 0.1, cubicBezier: [0.16, 1, 0.3, 1] }}
              onClick={() => setActiveImage(img.url)}
              className="break-inside-avoid group relative overflow-hidden rounded-2xl border border-luxury-charcoal bg-luxury-black shadow-lg cursor-pointer interactive-card"
              data-cursor="Zoom"
            >
              {/* Image Aspect ratio container */}
              <div className={`relative w-full ${img.aspect} overflow-hidden`}>
                <img
                  src={img.url}
                  alt={img.title}
                  className="h-full w-full object-cover transition-transform duration-[1.5s] group-hover:scale-105"
                />

                {/* Hover overlay detail block */}
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/90 via-luxury-black/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 flex flex-col justify-end p-6 z-10">
                  <ZoomIn className="absolute top-6 right-6 h-5 w-5 text-luxury-gold opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 delay-100" />

                  <p className="text-[10px] uppercase tracking-widest text-luxury-gold font-semibold">
                    {img.subtitle}
                  </p>
                  <h3 className="font-serif text-xl font-bold text-luxury-cream mt-1">
                    {img.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImage(null)}
            className="fixed inset-0 z-[1000] flex items-center justify-center bg-luxury-black/95 p-4 backdrop-blur-md"
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-6 right-6 rounded-full border border-luxury-cream/20 bg-luxury-black/80 p-3 text-luxury-cream hover:bg-luxury-cream/10 transition-colors"
              aria-label="Close Lightbox"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Lightbox Large Image Card */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 150 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[85vh] max-w-[90vw] overflow-hidden rounded-3xl border border-luxury-gold/20 shadow-2xl"
            >
              <img
                src={activeImage}
                alt="LA FIAMMA Large View"
                className="max-h-[80vh] max-w-full object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
