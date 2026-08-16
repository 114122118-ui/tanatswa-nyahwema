/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#d2bbff',
        secondary: '#4cd7f6',
        background: '#0b1326',
        surface: '#0d1b2a',
        'surface-2': '#16263f',
        text: '#e5ecff',
        textMuted: '#b5c2dd',
        glow: '#7c3aed',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Montserrat', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 30px rgba(210, 187, 255, 0.2)',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};
