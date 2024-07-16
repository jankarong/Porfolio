/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./pages/**/*.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Urbanist', 'sans-serif'],
      },
      colors: {
        'custom-hover': '#406EE3',
        primary: '#406EE3',
      },
      backgroundImage: {
        'tri-color-gradient': 'linear-gradient(270deg, #9BD4FA 0%, #E5E5F5 50%, #FFEEC3 100%)',
      },
    },
  },
  plugins: [

  ],

};