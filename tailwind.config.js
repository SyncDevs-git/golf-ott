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
       screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',

        // Your custom max breakpoints
        'max-sm': { max: '600px' },
        'max-md': { max: '767px' },
        'max-lg': { max: '991px' },
        'max-xl': { max: '1300px' },
        'max-2xl': { max: '1600px' },

        // Optional: custom breakpoint around your container width
        '3xl': '1566px',
        'max-3xl': { max: '1566px' }
      },
    },
    extend: {
       screens: {
         'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',

        // Your custom max breakpoints
        'max-sm': { max: '600px' },
        'max-md': { max: '767px' },
        'max-lg': { max: '991px' },
        'max-xl': { max: '1300px' },
        'max-2xl': { max: '1600px' },

        // Optional: custom breakpoint around your container width
        '3xl': '1566px',
        'max-3xl': { max: '1566px' }
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