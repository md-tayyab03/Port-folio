/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Rosemary', 'sans-serif'],
      },
      colors: {
        primary: '#0ea5e9',
        secondary: '#1e293b',
        dark: {
          DEFAULT: '#000000',
          lighter: '#0a0a0a',
          light: '#121212'
        }
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 }
        }
      },
      animation: {
        'blink': 'blink 1s step-end infinite'
      }
    },
  },
  plugins: [],
} 