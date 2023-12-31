/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "3xl": "2000px",
      }
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}

