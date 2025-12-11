import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Nostalgic Cream Theme
        cream: {
          50: '#fdfcfa',
          100: '#faf8f4',
          200: '#f8f5f0',
          300: '#f0ebe5',
          400: '#e8e0d8',
          500: '#d9cfc4',
          600: '#b8a99a',
          700: '#968474',
          800: '#6b5c4e',
          900: '#3d322a',
        },
        // IGDA Red
        igda: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#f87171',
          400: '#dc4444',
          500: '#b12924',
          600: '#8a1f1b',
          700: '#6b1815',
          800: '#4a1210',
          900: '#2d0b09',
          DEFAULT: '#b12924',
        },
        // Text colors
        ink: {
          900: '#1a1a1a',
          800: '#2d2d2d',
          700: '#333333',
          600: '#4a4a4a',
          500: '#666666',
          400: '#888888',
          300: '#aaaaaa',
          200: '#cccccc',
          100: '#eeeeee',
        },
      },
      fontFamily: {
        script: ['var(--font-script)', 'cursive'],
        display: ['var(--font-display)', 'Georgia', 'serif'],
        mono: ['var(--font-mono)', 'Courier New', 'monospace'],
      },
      fontSize: {
        'hero': ['clamp(3rem, 8vw, 5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'script-xl': ['clamp(2rem, 5vw, 3.5rem)', { lineHeight: '1.2' }],
        'script-lg': ['clamp(1.5rem, 3vw, 2.5rem)', { lineHeight: '1.3' }],
        'script-md': ['clamp(1.25rem, 2vw, 1.75rem)', { lineHeight: '1.3' }],
      },
      borderRadius: {
        'polaroid': '4px',
        'card': '8px',
      },
      boxShadow: {
        'polaroid': '0 4px 20px -4px rgba(0, 0, 0, 0.15), 0 8px 40px -8px rgba(0, 0, 0, 0.1)',
        'polaroid-hover': '0 12px 35px -4px rgba(0, 0, 0, 0.2), 0 16px 50px -8px rgba(0, 0, 0, 0.15)',
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.08)',
        'pixel': '4px 4px 0 0 rgba(0, 0, 0, 0.15)',
        'card': '0 4px 20px rgba(0, 0, 0, 0.06)',
      },
      animation: {
        'wiggle': 'wiggle 0.4s ease-in-out',
        'wiggle-slow': 'wiggleSlow 4s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'typewriter': 'typewriter 2s steps(40) forwards',
        'blink': 'blink 1s step-end infinite',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'polaroid-in': 'polaroidIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'scale-in': 'scaleIn 0.4s ease-out forwards',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(var(--rotation, 0deg))' },
          '25%': { transform: 'rotate(calc(var(--rotation, 0deg) - 3deg))' },
          '75%': { transform: 'rotate(calc(var(--rotation, 0deg) + 3deg))' },
        },
        wiggleSlow: {
          '0%, 100%': { transform: 'rotate(var(--rotation, 0deg))' },
          '50%': { transform: 'rotate(calc(var(--rotation, 0deg) + 1deg))' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        typewriter: {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        blink: {
          '50%': { borderColor: 'transparent' },
        },
        fadeUp: {
          'from': { opacity: '0', transform: 'translateY(30px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
        polaroidIn: {
          'from': { opacity: '0', transform: 'scale(0.8) rotate(-5deg)' },
          'to': { opacity: '1', transform: 'scale(1) rotate(var(--rotation, 0deg))' },
        },
        slideUp: {
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          'from': { opacity: '0', transform: 'scale(0.95)' },
          'to': { opacity: '1', transform: 'scale(1)' },
        },
      },
      backgroundImage: {
        'grain': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        'dots': "radial-gradient(circle, rgba(0,0,0,0.06) 1px, transparent 1px)",
        'paper': "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E\")",
      },
      transitionTimingFunction: {
        'bounce-soft': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
    },
  },
  plugins: [],
};

export default config;
