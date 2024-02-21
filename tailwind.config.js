/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    // Type here...
    fontFamily: {
      Forum: ['forum', 'serif'],
      Fredericka: ['Fredericka the Great', 'serif'],
      Nunito: ['Nunito Sans', 'sans-serif'],
    },
    extend: {
      // Type here...
      boxShadow: {
        'shadow2': 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px',
      },
      colors: {
        red: {
          111: '#ff1654',
        },
        blue: {
          111: '#118ab2'
        },
        green: {
          111: '#06d6a0'
        },
        yellow: {
          111: '#FFCB05'
        },
        white: {
          111: '#ffffff'
        },
      },
    },
  },
  plugins: [],
}

