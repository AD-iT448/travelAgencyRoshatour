/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  darkMode: 'class',
  theme: {
    container:{
      center:true,
      padding: '16px',
    },
    extend: {
      colors:{
        primary : '#05C824',
        dark :'#0f172a',
        secondary : '#64748b',
        transwhite:'FFFFFF',

      },
      screens:{
        '2xl' : '1320px',
      },
    },
  },
  plugins: [],
}
