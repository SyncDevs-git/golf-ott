/** @type {import('tailwindcss').Config} */

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
        'lg': '992px',
        'xl': '1300px',
        '2xl': '1400px',
        '3xl': '1556px',
        // Your custom max breakpoints
        'max-3xl': { max: '1556px' },
        'max-2xl': { max: '1400px' },
        'max-xl': { max: '1300px' },
        'max-lg': { max: '991px' },
        'max-md': { max: '767px' },
        'max-sm': { max: '600px' },
      },
    },
    extend: {
       screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '992px',
        'xl': '1300px',
        '2xl': '1400px',
        '3xl': '1556px',
        'tv': '2000px',
        // Your custom max breakpoints
        'max-3xl': { max: '1556px' },
        'max-2xl': { max: '1400px' },
        'max-xl': { max: '1300px' },
        'max-lg': { max: '991px' },
        'max-md': { max: '767px' },
        'max-sm': { max: '600px' },
      },
      fontFamily: {
        "playfair-display": ["Playfair Display", "sans-serif"],
        "inter": ["Inter", "sans-serif"],
      },
      colors: {
        primary: "var(--color-primary)",
        midnightBlue: "var(--color-midnightBlue)",
        gray: "var(--color-gray)",
        sunglow: "var(--color-sunglow)",
      },
      backgroundImage: {
        // Bottom to top
        'gradient-bt-dark': 'linear-gradient(0deg, var(--color-gradient-start, --color-midnightBlue) 0%, rgba(20, 40, 60, 0) 100%)',

        // Diagonal
        'gradient-diagonal-dark': 'linear-gradient(45deg, var(--color-gradient-start, --color-midnightBlue) 0%, rgba(20, 40, 60, 0) 100%)',

        // Background (white overlay fading up)
        'gradient-bg-white-soft': 'linear-gradient(0deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0) 100%)',

        // Video play page bg (same as above)
        'gradient-video-bg': 'linear-gradient(0deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0) 100%)',

        // Reverse white fade (bottom transparent to top white overlay)
        'gradient-reverse-white': 'linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.08) 100%)',
        'gradient-slider-arrow':
          'linear-gradient(270deg, var(--color-gradient-start, #14283C) 0%, rgba(20, 40, 60, 0) 100%), linear-gradient(270deg, var(--color-gradient-start, #14283C) 0%, rgba(20, 40, 60, 0) 100%)',
      },
      boxShadow: {
        tooltip: '0 4px 10px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}