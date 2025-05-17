/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html",
    "./pages/**/*.html",
    "./src/**/*.{js,jsx}",
    "./assets/**/*.{js,jsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '16px',
        sm: '16px',
        lg: '16px',
        xl: '16px',
        '2xl': '16px',
      },
    },
    extend: {
       screens: {
        sm: '600px',
        md: '728px',
        lg: '991px',
        xl: '1170px',
        '2xl': '1440px',
        'max-sm': { max: '600px' }, 
        'max-md': { max: '767px' }, 
        'max-lg': { max: '991px' }, 
        'max-xl': { max: '1300px' }, 
        'max-2xl': { max: '1440px' }, 
      },
      fontFamily: {
        "playfair-display": ["Playfair Display", ...defaultTheme.fontFamily.sans],
        "inter": ["Inter", "sans-serif"],
      },
      colors: {
        primary: '#D5A342',
        secondary: '#14283C',
        midnightBlue: '#14283C',
        gray: '#aaaaaa',
        sunglow: '#FFB743',
      },
    },
  },
  plugins: [],
}