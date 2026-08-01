'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Story', href: '#story' },
  { name: 'Menu', href: '#menu' },
  { name: 'Chef', href: '#chef' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Reservations', href: '#reservations' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when clicking link
  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, cubicBezier: [0.16, 1, 0.3, 1] }}
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'glassmorphism-gold py-4 shadow-luxury'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-12">
          {/* Logo */}
          <a
            href="#home"
            className="group flex flex-col items-center select-none"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
          >
            <span className="font-serif text-2xl font-bold tracking-[0.25em] text-gold-gradient transition-transform duration-500 group-hover:scale-105">
              LA FIAMMA
            </span>
            <span className="text-[7px] font-medium tracking-[0.6em] text-luxury-cream/60 uppercase mt-0.5">
              LUXURY PIZZERIA
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleLinkClick(link.href)
                }}
                className="relative text-xs uppercase tracking-[0.2em] text-luxury-cream/80 transition-colors duration-300 hover:text-luxury-gold border-reveal py-1"
                data-cursor="Discover"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Luxury Reservation Button Desktop */}
          <div className="hidden md:block">
            <a
              href="#reservations"
              className="relative overflow-hidden rounded-full border border-luxury-gold/50 px-6 py-2.5 text-xs uppercase tracking-widest text-luxury-gold transition-all duration-500 hover:bg-luxury-gold hover:text-luxury-black hover:border-luxury-gold"
              data-cursor="Desk"
            >
              Book Table
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex items-center justify-center rounded-full border border-luxury-cream/15 p-2 text-luxury-cream transition-colors hover:bg-luxury-cream/10 md:hidden"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </motion.nav>

      {/* Fullscreen Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 flex flex-col justify-between bg-[#090909]/98 px-8 py-24 backdrop-blur-xl md:hidden"
          >
            {/* Background fire glow inside mobile drawer */}
            <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-luxury-fire/10 blur-[80px] pointer-events-none" />

            {/* Nav links block */}
            <div className="flex flex-col gap-6 text-left">
              <p className="text-[10px] uppercase tracking-[0.4em] text-luxury-gold font-medium mb-2">
                Nostra Cucina
              </p>
              <div className="space-y-4">
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.name}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: idx * 0.05, duration: 0.5 }}
                  >
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault()
                        handleLinkClick(link.href)
                      }}
                      className="block font-serif text-3xl font-light tracking-wide text-luxury-cream hover:text-luxury-gold transition-colors"
                    >
                      {link.name}
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Drawer Footer info */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="border-t border-luxury-cream/10 pt-6"
            >
              <p className="font-serif text-lg text-luxury-gold tracking-widest mb-1">
                LA FIAMMA
              </p>
              <p className="text-xs text-luxury-cream/50 tracking-wider">
                Via della Scrofa 23, Roma, Italy
              </p>
              <p className="text-xs text-luxury-cream/50 tracking-wider mt-1">
                +39 06 123 4567
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
