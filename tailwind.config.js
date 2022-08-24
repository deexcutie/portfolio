/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'darkgray': '#272727',
        'dark': '#0a0a0a',
        'darker': '#121212',
        'tabledark': '#171616',
        white: colors.white,
        gray: colors.gray,
        blue: colors.blue,
        green: colors.green,
        red: colors.red,
        yellow: colors.yellow,
      },
    },
  },
  plugins: [],
}
