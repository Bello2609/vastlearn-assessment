/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: "Clash Grotesk",
        sansR: "Clash Grotesk",
        sansM: "Clash Grotesk"
      }
    },
  },
  plugins: [],
}