/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', '"Google Sans"', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'Fira Code', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      colors: {
        brand: {
          50: '#f0fdf4',
          100: '#dcfce7',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
        },
        dark: {
          bg: '#08090d',
          card: '#10121a',
          surface: '#161924',
          border: '#212638',
          text: '#f1f5f9',
          muted: '#94a3b8',
        }
      },
      boxShadow: {
        'subtle': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'subtle-dark': '0 1px 3px 0 rgba(0, 0, 0, 0.4)',
        'card-hover': '0 12px 32px -10px rgba(0,0,0,0.1)',
        'card-hover-dark': '0 12px 32px -10px rgba(0,0,0,0.6)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'pulse-subtle': 'pulseSubtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'marquee': 'marquee 25s linear infinite',
        'marquee-slow': 'marquee 40s linear infinite',
        'float-slow': 'floatSlow 6s ease-in-out infinite',
        'float-reverse': 'floatReverse 7s ease-in-out infinite',
        'gradient-x': 'gradientX 8s ease infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.4' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translate(0px, 0px)' },
          '50%': { transform: 'translate(10px, -15px)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translate(0px, 0px)' },
          '50%': { transform: 'translate(-12px, 12px)' },
        },
        gradientX: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        }
      }
    },
  },
  plugins: [],
}
