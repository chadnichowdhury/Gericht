/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'common': ["Open Sans", "sans-serif"],
        'sub': ["Cormorant Upright", "serif"],
      },
    },
  },
  plugins: [],
}