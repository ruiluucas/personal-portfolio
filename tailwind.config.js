/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "white": "#FFFFF3",
        "green": {
          500: "#00D9C0"
        }
      }
    },
  },
  plugins: [],
}
