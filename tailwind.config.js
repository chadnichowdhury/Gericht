/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {

      fontFamily: {
        'common': ["Open Sans", "sans-serif"],
        'sub': ["Cormorant Upright", "serif"],
      },

      container: {
        center: true,
      },

      backgroundImage: {
        'image': "url('./Images/Footer-bg.png')",
      },

      animation: {
        'rotate': 'spinSlow 10s linear infinite',
      },

      keyframes: {
        spinSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      },

    },
  },
  plugins: [],
}