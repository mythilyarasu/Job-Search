/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors:{
        'blueColor':'#2a68ff',
        'greyIsh':'#9DB2BF',
        'cardShadow':'#f7f8f9',
        'textColor':'#252b36',

      }
    },
  },
  plugins: [],
}

