/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    // Type here...
    fontFamily: {
      Forum: ['forum', 'serif'],
      Fredericka: ['Fredericka the Great', 'serif'],
      Nunito: ['Nunito Sans', 'sans-serif'],
      Poppins: ['Poppins', 'sans-serif'],
    },
    extend: {
      listStyleImage: {
        redBullet: 'url("/dist/bullet/Red/icons16.png")',
        greenBullet: 'url("/dist/bullet/Green/icons16.png")',
      },
      boxShadow: {
        'shadow2': 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px',
        'shadow8': 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px',
        'shadow28': 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px',
        'shadow84': 'rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.9) 0px 0px 0px 1px',
        'shadow85': 'rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset',
        'shadow89': 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset',
      },
      // colors: {
      //   red: {
      //     111: '#ff1654',
      //   },
      //   blue: {
      //     111: '#118ab2'
      //   },
      //   green: {
      //     111: '#06d6a0'
      //   },
      //   yellow: {
      //     111: '#FFCB05'
      //   },
      //   white: {
      //     111: '#ffffff'
      //   },
      // },
    },
  },
  plugins: [],
}

