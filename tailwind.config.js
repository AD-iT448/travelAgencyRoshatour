/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html','about.html'],
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
        secondary : '#043A0D',
        transwhite:'FFFFFF',
        abuabu : 'F2F2F2',


      },
      screens:{
        '2xl' : '1320px',
      },
    },
  },
  plugins: [],
}
