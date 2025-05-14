 /** @type {import('tailwindcss').Config} */
 const defaultTheme = require("tailwindcss/defaultTheme");

 export default {
  content: ["*", "./pages/*html", "./src/**/*.{js,jsx}","./assets/**/*.{js,jsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "16px",
      },
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1240px",
        "2xl": "1352px",
      },
    },
    extend: {
      fontFamily: {
        "Playfair-Displa": ["Playfair Displa", ...defaultTheme.fontFamily.sans],
        "Inter": ["Inter", "sans-serif"],
      },
      colors: {
        primary: '#D5A342',
        secondary: '#14283C',
        midnightBlue: '#14283C',
        gray: '#aaaaaa'
      },
    },
  },
  plugins: [],
}