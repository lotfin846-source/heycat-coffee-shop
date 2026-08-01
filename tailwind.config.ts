import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f2f7ff',
          100: '#dcecff',
          500: '#2563eb',
          600: '#1d4ed8',
          700: '#1e40af',
        },
        luxury: {
          black: '#090909',
          dark: '#111111',
          charcoal: '#1a1a1a',
          brown: '#2d1e15',
          cream: '#fcfaf2',
          gold: {
            light: '#f3e5ab',
            DEFAULT: '#d4af37',
            dark: '#aa7c11',
            muted: '#c5a880',
          },
          fire: {
            DEFAULT: '#ff5a1f',
            glow: '#ff7733',
          }
        }
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['var(--font-montserrat)', 'Montserrat', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 20px 60px -25px rgba(15, 23, 42, 0.35)',
        luxury: '0 4px 30px rgba(0, 0, 0, 0.8)',
        goldGlow: '0 0 25px rgba(212, 175, 55, 0.2)',
        fireGlow: '0 0 40px rgba(255, 90, 31, 0.25)',
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
        'slide-up': 'slideUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'smoke': 'smoke 8s ease-in-out infinite',
        'fire-flicker': 'fireFlicker 0.15s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(50px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(2deg)' },
        },
        smoke: {
          '0%': { transform: 'translateY(0) scale(1) rotate(0deg)', opacity: '0' },
          '10%': { opacity: '0.4' },
          '50%': { transform: 'translateY(-100px) scale(1.5) rotate(180deg)', opacity: '0.2' },
          '100%': { transform: 'translateY(-200px) scale(2) rotate(360deg)', opacity: '0' },
        },
        fireFlicker: {
          '0%': { transform: 'scale(1)', opacity: '0.9' },
          '100%': { transform: 'scale(1.05)', opacity: '1' },
        }
      }
    },
  },
  plugins: [],
} satisfies Config
