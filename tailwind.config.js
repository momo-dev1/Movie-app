/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        eerieBlack: "#201C12",
      },
      fontFamily: {
        sans: ['Poppins', "sans-serif"]
      },
    },
  },
  plugins: [],
}