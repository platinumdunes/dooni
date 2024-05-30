/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-color': '#76885B',
        'custom-color-2': '#627254',
        'red': '#ff0000',
        'brown' : "#493F3E",
        'yellow' : "#FFFF00",
      },
      height: {
        '200px': '200px',
        '100px' : '100px',
        '150px' : '150px',
        '50px' : '50px',
        '25px' : '25px',
        '30px' : '30px',
        '60px' : '60px',
        '35': '8.75rem',
      },
      width: {
        '1000px': '1000px',
        '1200px': '1200px',
        '600px': '600px',
        '300px': '300px',
        '200px': '200px',
        '100px' : '100px',
        '150px' : '150px',
        '50px' : '50px',
        '25px' : '25px'
      },
      margin: {
        '-25': '-6.25rem',
        '-30' : '7.5rem',
        '15' : '3.75rem',
        '-20': '-5rem',
        '20': '5rem',
        '-5': '-1.25rem',
        '100': '25rem',
        '21px' : '21px',
        '20px' : '20px',
        '15px' : '15px',
        '10px' : '10px',
        '50px' : '50px',
        '100px' : '100px',
        '120px' : '120px',
      },
    },
  },
  plugins: [],
}

