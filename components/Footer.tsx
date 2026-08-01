'use client'

import { motion } from 'framer-motion'
import { Instagram, Facebook, Phone, MapPin, Mail, ArrowUp } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer id="contact" className="relative bg-luxury-black pt-24 pb-12 border-t border-luxury-charcoal overflow-hidden">
      {/* Absolute faint glow lines */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-luxury-gold/35 to-transparent" />
      <div className="absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-luxury-brown/15 blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-12 relative z-10">

        {/* Main Grid: Info columns */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 pb-16 border-b border-luxury-charcoal/40">

          {/* Col 1: About & Hours */}
          <div className="space-y-6">
            <h4 className="text-xs uppercase tracking-[0.3em] text-luxury-gold font-bold">LA FIAMMA</h4>
            <p className="text-xs sm:text-sm text-luxury-cream/65 leading-relaxed font-light tracking-wide">
              An award-winning haute-gastronomy Neapolitan dining desk based in Rome and serving pure epicurean craft.
            </p>
            <div className="space-y-1">
              <p className="text-[10px] uppercase tracking-widest text-luxury-gold font-semibold">Cucina Hours</p>
              <p className="text-xs text-luxury-cream/75">Mon - Sun: 18:00 PM - 23:30 PM</p>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-6">
            <h4 className="text-xs uppercase tracking-[0.3em] text-luxury-gold font-bold">Discover</h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li>
                <a href="#home" className="text-luxury-cream/65 hover:text-luxury-gold transition-colors font-light tracking-wider">Home</a>
              </li>
              <li>
                <a href="#story" className="text-luxury-cream/65 hover:text-luxury-gold transition-colors font-light tracking-wider">Our Story</a>
              </li>
              <li>
                <a href="#menu" className="text-luxury-cream/65 hover:text-luxury-gold transition-colors font-light tracking-wider">The Menu</a>
              </li>
              <li>
                <a href="#reservations" className="text-luxury-cream/65 hover:text-luxury-gold transition-colors font-light tracking-wider">Book Seating</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact Details */}
          <div className="space-y-6">
            <h4 className="text-xs uppercase tracking-[0.3em] text-luxury-gold font-bold">Contact Desk</h4>
            <ul className="space-y-3.5 text-xs sm:text-sm text-luxury-cream/65">
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-luxury-gold flex-shrink-0" />
                <span className="font-light tracking-wide">Via della Scrofa 23, Roma, Italy</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-luxury-gold flex-shrink-0" />
                <span className="font-light tracking-wide">+39 06 123 4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-luxury-gold flex-shrink-0" />
                <span className="font-light tracking-wide">maitre@lafiammaroma.com</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter or Social */}
          <div className="space-y-6">
            <h4 className="text-xs uppercase tracking-[0.3em] text-luxury-gold font-bold">The Journal</h4>
            <p className="text-xs text-luxury-cream/65 leading-relaxed font-light tracking-wide">
              Subscribe to receive exclusive invitations to private degustations and cellar releases.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email..."
                className="w-full rounded-l-xl bg-luxury-dark border border-luxury-charcoal px-3 py-2 text-xs focus:outline-none focus:border-luxury-gold text-luxury-cream transition-colors"
              />
              <button className="bg-luxury-gold hover:bg-luxury-gold-dark text-luxury-black px-4 rounded-r-xl text-xs font-bold transition-all">
                Join
              </button>
            </div>
          </div>

        </div>

        {/* Big styled centered brand name */}
        <div className="relative py-16 text-center select-none overflow-hidden">
          <h1 className="font-serif text-[11vw] font-bold tracking-[0.25em] text-luxury-cream/[0.03] uppercase leading-none">
            LA FIAMMA
          </h1>

          {/* Scroll to top button */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <button
              onClick={scrollToTop}
              className="group flex h-12 w-12 items-center justify-center rounded-full border border-luxury-gold/30 bg-luxury-black text-luxury-gold transition-all duration-500 hover:bg-luxury-gold hover:text-luxury-black hover:border-luxury-gold shadow-goldGlow interactive-card"
              aria-label="Scroll to Top"
              data-cursor="Top"
            >
              <ArrowUp className="h-5 w-5 transition-transform group-hover:-translate-y-1" />
            </button>
          </div>
        </div>

        {/* Lower row: copyright & social icons */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-luxury-charcoal/20">
          <p className="text-[10px] uppercase tracking-widest text-luxury-cream/40 font-light">
            &copy; {new Date().getFullYear()} LA FIAMMA S.p.A. All rights reserved. Crafted for refined palates.
          </p>

          <div className="flex gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-luxury-cream/15 p-2 text-luxury-cream/70 hover:text-luxury-gold hover:border-luxury-gold/50 transition-all"
              aria-label="Instagram Profile"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-luxury-cream/15 p-2 text-luxury-cream/70 hover:text-luxury-gold hover:border-luxury-gold/50 transition-all"
              aria-label="Facebook Profile"
            >
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  )
}
