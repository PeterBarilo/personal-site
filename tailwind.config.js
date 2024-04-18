/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'terminal': '#4AF626',
      'hterminal': '#33a61b',
      'gray': '#101010',
      'lightgray': '#202020'
    },
    extend: {
      fontFamily:{
        custom:[ "Source Code Pro", "sans-serif"],
        custom2:[ "Orbitron", "sans-serif"],
      },
      spacing: {
        '128': '35rem',
      }
    },
  },
  plugins: [],
}

