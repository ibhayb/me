/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        // {...}
        spin_right: 'spin_right 3s linear infinite',
        spin_right_fast: 'spin_right 2s linear infinite',
        spin_left: 'spin_left 3s linear infinite',
        fadein: 'fadeIn 0.5s ease-in-out',
        'text-slide-3': 'text-slide-3 7.5s cubic-bezier(0.83, 0, 0.17, 1) infinite'
      },
      keyframes: {
        // {...}
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 }
        },
        spin_right: {
          '0%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(180deg)' },
          '100%': { transform: 'rotate(360deg)' }
        },
        spin_left: {
          '0%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(-180deg)' },
          '100%': { transform: 'rotate(-360deg)' }
        },
        'text-slide-3': {
          '0%, 26.66%': {
            transform: 'translateY(0%)'
          },
          '33.33%, 60%': {
            transform: 'translateY(-25%)'
          },
          '66.66%, 93.33%': {
            transform: 'translateY(-50%)'
          },
          '100%': {
            transform: 'translateY(-75%)'
          }
        }
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        sans: [
          'Mona Sans', // Primary font
          'ui-sans-serif', // Tailwind's default
          'system-ui',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          'Segoe UI Symbol',
          '"Noto Color Emoji"' // Fallbacks
        ]
      },
      colors: {
        laravel: {
          red: '#FF2D20'
        },
        typescript: {
          blue: '#1877F2'
        },
        vue: {
          green: '#1DA1F2'
        },
        python: {}
      }
    }
  },
  plugins: []
}
