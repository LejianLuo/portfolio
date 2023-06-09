/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        gillsans: ["Gill Sans",'sans-serif'],
      },
      keyframes: {
        fadeIn: {
          'from': { opacity: 0 },
          'to': { opacity: 1 },
        },
        textEnlarge: {
          'from': { fontSize: '2rem' },
          'to': { fontSize: '3rem' },
        },
      },
      animation: {
        'fadeIn': 'fadeIn 1.5s ease-in-out',
        'textEnlarge':'textEnlarge 1.5s ease-in-out' 
      }
    },
  },
  plugins: [],
}

