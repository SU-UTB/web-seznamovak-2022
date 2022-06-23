/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        beige: '#FDECBE',
        dark_blu: '#222B45',
        orange: '#E25525',
        yellow_orange: '#F3A548'
      }
    },
    fontFamily: {
      'mont': ['Montserrat', 'sans-serif'],
    }
  },
  plugins: [],
}
