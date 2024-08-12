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
      typography: {
        'my-custom-h1': {
          fontSize: '1.125rem',
          '@screen md': {
            fontSize: '1.25rem',
          },
          '@screen lg': {
            fontSize: '1.5rem',
          },
          fontWeight: '500',
        },
        'my-custom-h2': {
          fontSize: '1rem',
          '@screen md': {
            fontSize: '1.125rem',
          },
          '@screen lg': {
            fontSize: '1.25rem',
          },
          fontWeight: '500',
        },
        'my-custom-p': {
          fontSize: '0.875rem',
          '@screen md': {
            fontSize: '1rem',
          },
          '@screen lg': {
            fontSize: '1.125rem',
          },
        },
      },
    },
  },
  plugins: [],
};