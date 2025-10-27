/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#eff5f0',
          100: '#dce7dd',
          200: '#bbd1be',
          300: '#96b79a',
          400: '#739b78',
          500: '#597f5f',
          600: '#47664c',
          700: '#3b5240',
          800: '#2f4033',
          900: '#263428',
          950: '#151d17',
        },
        bronze: '#c79f5c',
        sand: '#d0ae7c',
        pine: '#37493b',
        moss: '#1b2a22',
      },
      fontFamily: {
        sans: ['"Manrope"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 0 1px rgba(199, 159, 92, 0.2), 0 20px 45px -20px rgba(0,0,0,0.8)',
      },
    },
  },
  plugins: [],
}
