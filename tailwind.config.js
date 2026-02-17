/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ffde59", // Sky blue
        dark: "#001f3f",    // Deep dark background 001f3f ; charcoal - 202020
      }
    },
  },
  plugins: [],
}
