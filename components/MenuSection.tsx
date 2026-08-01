'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const categories = ['Pizza', 'Pasta', 'Desserts', 'Drinks']

const menuItemsData: Record<string, Array<{ name: string; desc: string; price: string; tag?: string }>> = {
  Pizza: [
    {
      name: 'Margherita Classica',
      desc: 'San Marzano DOP, fior di latte, fresh organic basil, cold-pressed extra virgin olive oil.',
      price: '$22',
      tag: 'Heritage',
    },
    {
      name: 'Quattro Formaggi d\'Alpe',
      desc: 'Gorgonzola Dolce, Pecorino Romano, Taleggio, aged Mozzarella, wild organic mountain honey.',
      price: '$26',
    },
    {
      name: 'Prosciutto e Rucola',
      desc: 'Thinly sliced Prosciutto di Parma, wild baby arugula, shaved Parmigiano-Reggiano, fresh lemon oil.',
      price: '$28',
      tag: 'Classic',
    },
    {
      name: 'Marinara di Lusso',
      desc: 'Crushed San Marzano tomatoes, Sicilian wild oregano, sliced heirloom garlic, salt-cured caper berries.',
      price: '$20',
    },
  ],
  Pasta: [
    {
      name: 'Tartufo Fettuccine',
      desc: 'House-made egg fettuccine, double-cream Alpine butter, freshly shaved winter black truffle, Pecorino.',
      price: '$32',
      tag: 'Signature',
    },
    {
      name: 'Lobster Linguine',
      desc: 'Poached Atlantic lobster tail, sweet cherry tomatoes, white wine, garlic, fresh red chili flakes.',
      price: '$38',
    },
    {
      name: 'Slow-cooked Ragù Bolognese',
      desc: 'Hand-cut tagliatelle, 12-hour slow-cooked wild boar and veal ragù, aged Parmigiano.',
      price: '$29',
    },
    {
      name: 'Gnocchi al Gorgonzola',
      desc: 'Pillowy potato gnocchi, rich Gorgonzola cream, toasted Piedmont hazelnuts, micro-basil.',
      price: '$27',
    },
  ],
  Desserts: [
    {
      name: 'Signature Tiramisu',
      desc: 'Espresso-soaked ladyfingers, rich whipped mascarpone cream, dark cocoa dust, hazelnut liqueur.',
      price: '$15',
      tag: 'Chef Favorite',
    },
    {
      name: 'Sicilian Cannoli',
      desc: 'Crisp pastry shell, sweet sheep milk ricotta, candied orange zest, roasted Bronte pistachios.',
      price: '$14',
    },
    {
      name: 'Lava Cake d\'Oro',
      desc: 'Warm molten single-origin dark chocolate cake, Madagascar vanilla bean gelato, edible gold dust.',
      price: '$16',
    },
    {
      name: 'Panna Cotta al Pistacchio',
      desc: 'Silky cooked cream infused with organic pistachios, wild raspberry coulis, fresh mint.',
      price: '$14',
    },
  ],
  Drinks: [
    {
      name: 'Barolo DOCG Vintage 2016',
      desc: 'An exquisite vintage red wine, highly structured, complex notes of dark cherry and tobacco.',
      price: '$24 / Glass',
      tag: 'Exclusive',
    },
    {
      name: 'Negroni Sbagliato d\'Oro',
      desc: 'Campari, sweet vermouth, premium Prosecco, finished with edible gold flakes and orange peel.',
      price: '$19',
    },
    {
      name: 'Limoncello Spritz',
      desc: 'House-made Amalfi limoncello, premium Prosecco, fresh garden mint, soda water.',
      price: '$18',
    },
    {
      name: 'Acqua Panna Luxury Glass',
      desc: 'Still natural spring water from the pristine hills of Tuscany. Serves two.',
      price: '$10',
    },
  ],
}

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState('Pizza')

  return (
    <section id="menu" className="relative py-24 lg:py-36 bg-luxury-black overflow-hidden border-y border-luxury-charcoal">
      {/* Ambient background grids */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.015)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-12 relative z-10">

        {/* Section Header */}
        <div className="mb-16 text-center flex flex-col items-center">
          <p className="text-xs uppercase tracking-[0.4em] text-luxury-gold font-semibold">
            Il Nostro Menu
          </p>
          <h2 className="mt-4 font-serif text-4xl font-bold tracking-tight text-luxury-cream sm:text-5xl">
            A Masterclass in <span className="text-gold-gradient">Flavor</span>
          </h2>
          <div className="mt-6 h-[1px] w-24 bg-luxury-gold/50" />
        </div>

        {/* Tab Switcher Navigation */}
        <div className="flex justify-center mb-16">
          <div className="flex flex-wrap justify-center gap-2 rounded-full border border-luxury-gold/15 bg-luxury-charcoal/30 p-2 backdrop-blur-md">
            {categories.map((category) => {
              const isActive = activeCategory === category
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className="relative rounded-full px-6 py-2.5 text-xs font-semibold uppercase tracking-widest transition-all duration-300 interactive-card"
                  style={{
                    color: isActive ? '#090909' : 'rgba(252, 250, 242, 0.75)',
                  }}
                  data-cursor="Select"
                >
                  {/* Active Slide Background */}
                  {isActive && (
                    <motion.div
                      layoutId="activeMenuTab"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-luxury-gold to-luxury-gold-light"
                    />
                  )}
                  <span className="relative z-10">{category}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Menu Items List */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5 }}
              className="grid gap-12 md:grid-cols-2 lg:gap-x-16 lg:gap-y-12"
            >
              {menuItemsData[activeCategory].map((item, idx) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.08, duration: 0.5 }}
                  className="group relative flex flex-col justify-between border-b border-luxury-charcoal pb-6"
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-serif text-lg font-bold text-luxury-cream transition-colors group-hover:text-luxury-gold sm:text-xl">
                      {item.name}
                    </h3>

                    {/* Tiny premium highlight tag */}
                    {item.tag && (
                      <span className="hidden sm:inline-block rounded-full bg-luxury-gold/5 px-2.5 py-0.5 text-[8px] font-bold uppercase tracking-widest text-luxury-gold border border-luxury-gold/15">
                        {item.tag}
                      </span>
                    )}

                    <div className="h-[1px] flex-grow border-b border-dashed border-luxury-gold/20" />

                    <span className="font-serif text-lg font-semibold text-luxury-gold sm:text-xl">
                      {item.price}
                    </span>
                  </div>

                  <p className="mt-3 text-xs sm:text-sm text-luxury-cream/60 font-light leading-relaxed tracking-wider max-w-lg">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dynamic callout note */}
        <div className="mt-16 text-center">
          <p className="text-xs text-luxury-cream/50 italic tracking-wider">
            All prices are inclusive of local taxes. Please inform our servers of any dietary requirements or food allergies.
          </p>
        </div>

      </div>
    </section>
  )
}
