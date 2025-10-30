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
        highlight: '#FFDCAF',
        accent: '#2F3A2D',
        surface: {
          base: '#202020',
          section: '#4F5A4A',
          card: '#1b1f20',
          overlay: '#1f211d',
          muted: '#252824',
          shadow: '#1d211c',
          deep: '#1D1E1C',
          noir: '#101612',
          contrast: '#1C1C1C',
        },
        neutral: {
          muted: '#5B5B5B',
        },
        text: {
          contrast: '#1c2c22',
        },
        gradient: {
          highlight: '#2f352c',
          mid: '#252b24',
          base: '#1d211c',
        },
      },
      spacing: {
        1: '0.25rem',
        2: '0.5rem',
        3: '0.75rem',
        4: '1rem',
        5: '1.25rem',
        6: '1.5rem',
        7: '1.75rem',
        8: '2rem',
        10: '2.5rem',
        12: '3rem',
        14: '3.5rem',
        16: '4rem',
        20: '5rem',
        24: '6rem',
      },
      fontFamily: {
        sans: ['"Manrope"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 0 1px rgba(255, 220, 175, 0.2), 0 20px 45px -20px rgba(0,0,0,0.8)',
      },
    },
  },
  plugins: [],
}
