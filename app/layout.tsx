import './globals.css'
import type { Metadata } from 'next'
import { Playfair_Display, Montserrat } from 'next/font/google'

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: 'LA FIAMMA | Luxury Italian Pizza Restaurant',
  description: 'Experience authentic handcrafted Italian pizza, wood-fired to perfection. Pure luxury in every slice at LA FIAMMA.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${playfair.variable} ${montserrat.variable} bg-luxury-black text-luxury-cream antialiased selection:bg-luxury-gold selection:text-luxury-black`}>
        {children}
      </body>
    </html>
  )
}
