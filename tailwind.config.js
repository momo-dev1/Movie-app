/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        eerieBlack: "#121620",
        blackCoral: "#5f6471",
        darkGunmetal: "#1c212e",
      },
      fontFamily: {
        sans: ['Poppins', "sans-serif"]
      },
    },
  },
  plugins: [],
}