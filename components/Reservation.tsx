'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, User, Mail, Users, Clock, Send, Sparkles } from 'lucide-react'

export default function Reservation() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    guests: '2',
    date: '',
    time: '19:00',
    notes: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
    }, 1500)
  }

  return (
    <section id="reservations" className="relative py-24 lg:py-36 bg-luxury-dark overflow-hidden border-t border-luxury-charcoal">
      {/* Absolute backgrounds */}
      <div className="absolute -bottom-20 left-10 h-96 w-96 rounded-full bg-luxury-fire/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-10 right-10 h-80 w-80 rounded-full bg-luxury-gold/5 blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-4xl px-6 relative z-10">

        {/* Header */}
        <div className="mb-16 text-center flex flex-col items-center">
          <p className="text-xs uppercase tracking-[0.4em] text-luxury-gold font-semibold">
            Servizio Prenotazioni
          </p>
          <h2 className="mt-4 font-serif text-4xl font-bold tracking-tight text-luxury-cream sm:text-5xl">
            Secure Your <span className="text-gold-gradient">Placement</span>
          </h2>
          <p className="mt-4 max-w-lg text-xs sm:text-sm text-luxury-cream/70 leading-relaxed tracking-wider font-light">
            Due to our restricted seating of exactly fourteen candle-lit tables, we advise making reservations at least forty-eight hours in advance.
          </p>
          <div className="mt-6 h-[1px] w-24 bg-luxury-gold/50" />
        </div>

        {/* Reservation Desk Box */}
        <div className="glassmorphism rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden gold-border-glow">
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form
                key="booking-form"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="grid gap-6 md:grid-cols-2">
                  {/* Name Input */}
                  <div className="space-y-2">
                    <label htmlFor="res-name" className="text-[10px] uppercase tracking-widest text-luxury-gold font-semibold flex items-center gap-2">
                      <User className="h-3.5 w-3.5" /> Full Name
                    </label>
                    <input
                      id="res-name"
                      type="text"
                      required
                      placeholder="e.g. Countess Sterling"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full rounded-xl bg-luxury-black/60 border border-luxury-charcoal px-4 py-3.5 text-sm text-luxury-cream placeholder-luxury-cream/35 focus:outline-none focus:border-luxury-gold transition-colors"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-2">
                    <label htmlFor="res-email" className="text-[10px] uppercase tracking-widest text-luxury-gold font-semibold flex items-center gap-2">
                      <Mail className="h-3.5 w-3.5" /> Email Address
                    </label>
                    <input
                      id="res-email"
                      type="email"
                      required
                      placeholder="e.g. sterling@vogue.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full rounded-xl bg-luxury-black/60 border border-luxury-charcoal px-4 py-3.5 text-sm text-luxury-cream placeholder-luxury-cream/35 focus:outline-none focus:border-luxury-gold transition-colors"
                    />
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-3">
                  {/* Guests Input */}
                  <div className="space-y-2">
                    <label htmlFor="res-guests" className="text-[10px] uppercase tracking-widest text-luxury-gold font-semibold flex items-center gap-2">
                      <Users className="h-3.5 w-3.5" /> Table For
                    </label>
                    <select
                      id="res-guests"
                      value={form.guests}
                      onChange={(e) => setForm({ ...form, guests: e.target.value })}
                      className="w-full rounded-xl bg-luxury-black/60 border border-luxury-charcoal px-4 py-3.5 text-sm text-luxury-cream focus:outline-none focus:border-luxury-gold transition-colors appearance-none"
                    >
                      <option value="1">1 Connoisseur</option>
                      <option value="2">2 Guests</option>
                      <option value="3">3 Guests</option>
                      <option value="4">4 Guests</option>
                      <option value="6">Private Room (5-8 Guests)</option>
                    </select>
                  </div>

                  {/* Date Input */}
                  <div className="space-y-2">
                    <label htmlFor="res-date" className="text-[10px] uppercase tracking-widest text-luxury-gold font-semibold flex items-center gap-2">
                      <Calendar className="h-3.5 w-3.5" /> Desired Date
                    </label>
                    <input
                      id="res-date"
                      type="date"
                      required
                      value={form.date}
                      onChange={(e) => setForm({ ...form, date: e.target.value })}
                      className="w-full rounded-xl bg-luxury-black/60 border border-luxury-charcoal px-4 py-3.5 text-sm text-luxury-cream focus:outline-none focus:border-luxury-gold transition-colors"
                    />
                  </div>

                  {/* Time Input */}
                  <div className="space-y-2">
                    <label htmlFor="res-time" className="text-[10px] uppercase tracking-widest text-luxury-gold font-semibold flex items-center gap-2">
                      <Clock className="h-3.5 w-3.5" /> Hour
                    </label>
                    <select
                      id="res-time"
                      value={form.time}
                      onChange={(e) => setForm({ ...form, time: e.target.value })}
                      className="w-full rounded-xl bg-luxury-black/60 border border-luxury-charcoal px-4 py-3.5 text-sm text-luxury-cream focus:outline-none focus:border-luxury-gold transition-colors"
                    >
                      <option value="18:00">18:00 PM</option>
                      <option value="19:00">19:00 PM</option>
                      <option value="20:00">20:00 PM</option>
                      <option value="21:00">21:00 PM</option>
                      <option value="22:00">22:00 PM</option>
                    </select>
                  </div>
                </div>

                {/* Special Notes */}
                <div className="space-y-2">
                  <label htmlFor="res-notes" className="text-[10px] uppercase tracking-widest text-luxury-gold font-semibold">
                    Bespoke Request (Dietary notes, cellar choices, private booth)
                  </label>
                  <textarea
                    id="res-notes"
                    rows={4}
                    placeholder="Describe any custom touches or wine pairing requirements you might desire..."
                    value={form.notes}
                    onChange={(e) => setForm({ ...form, notes: e.target.value })}
                    className="w-full rounded-xl bg-luxury-black/60 border border-luxury-charcoal px-4 py-3.5 text-sm text-luxury-cream placeholder-luxury-cream/35 focus:outline-none focus:border-luxury-gold transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="relative flex items-center justify-center gap-3 w-full rounded-full bg-gradient-to-r from-luxury-gold to-luxury-gold-dark py-4 text-xs font-semibold uppercase tracking-[0.25em] text-luxury-black transition-all duration-500 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] disabled:opacity-50 interactive-card"
                    data-cursor="Book"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="h-4 w-4 animate-spin rounded-full border-2 border-luxury-black border-t-transparent" />
                        <span>Verifying Availability...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        <span>Request Table Reservation</span>
                      </>
                    )}
                  </button>
                </div>
              </motion.form>
            ) : (
              <motion.div
                key="booking-success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: 'spring', damping: 20 }}
                className="text-center py-12 flex flex-col items-center space-y-6"
              >
                <div className="rounded-full bg-luxury-gold/10 p-6 text-luxury-gold border border-luxury-gold/20 shadow-goldGlow">
                  <Sparkles className="h-10 w-10 animate-pulse" />
                </div>
                <div>
                  <h3 className="font-serif text-3xl font-bold text-luxury-cream">Placement Requested</h3>
                  <p className="text-xs uppercase tracking-widest text-luxury-gold font-semibold mt-2">
                    Grazie Mille, {form.name}
                  </p>
                </div>
                <p className="text-sm text-luxury-cream/70 leading-relaxed max-w-md font-light tracking-wide">
                  Our Lead Maître d' is reviewing our seat maps for <strong className="text-luxury-cream font-medium">{form.date}</strong> at <strong className="text-luxury-cream font-medium">{form.time}</strong>. An email with confirmation details and dress-code specifics will arrive within thirty minutes.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setSubmitted(false)
                      setForm({
                        name: '',
                        email: '',
                        guests: '2',
                        date: '',
                        time: '19:00',
                        notes: '',
                      })
                    }}
                    className="rounded-full border border-luxury-cream/15 px-6 py-2.5 text-xs uppercase tracking-widest text-luxury-cream/80 hover:bg-luxury-cream/5 hover:text-luxury-cream transition-all duration-300"
                  >
                    Request Another Seating
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
