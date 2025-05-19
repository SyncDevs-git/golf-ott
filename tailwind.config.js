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
        'max-3xl': { max: '1566px' },
        'max-2xl': { max: '1600px' },
        'max-xl': { max: '1300px' },
        'max-lg': { max: '991px' },
        'max-md': { max: '767px' },
        'max-sm': { max: '600px' },

        // Optional: custom breakpoint around your container width
        '3xl': '1566px',
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
        'max-3xl': { max: '1566px' },
        'max-2xl': { max: '1600px' },
        'max-xl': { max: '1300px' },
        'max-lg': { max: '991px' },
        'max-md': { max: '767px' },
        'max-sm': { max: '600px' },

        // Optional: custom breakpoint around your container width
        '3xl': '1566px',
      },
      fontFamily: {
        "playfair-display": ["Playfair Display", "sans-serif"],
        "inter": ["Inter", "sans-serif"],
      },
      colors: {
        primary: '#D5A342',
        secondary: '#14283C',
        midnightBlue: '#14283C',
        gray: '#aaaaaa',
        sunglow: '#FFB743',
      },
      backgroundImage: {
        // Bottom to top
        'gradient-bt-dark': 'linear-gradient(0deg, #14283C 0%, rgba(20, 40, 60, 0) 100%)',

        // Left to right (diagonal)
        'gradient-diagonal-dark': 'linear-gradient(45deg, #14283C 0%, rgba(20, 40, 60, 0) 100%)',

        // Background (white overlay fading up)
        'gradient-bg-white-soft': 'linear-gradient(0deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0) 100%)',

        // Video play page bg (same as above)
        'gradient-video-bg': 'linear-gradient(0deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0) 100%)',

        // Reverse white fade (bottom transparent to top white overlay)
        'gradient-reverse-white': 'linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.08) 100%)',
      },
    },
  },
  plugins: [],
}