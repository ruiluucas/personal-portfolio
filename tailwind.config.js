/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          50: '#F9F8F8',
          100: '#F2F0F0',
          200: '#DDD9D9',
          300: '#C7C1C1',
          400: '#9C9191',
          500: '#0F0A0A', // Cor personalizada que você mencionou
          600: '#0D0909',
          700: '#0A0707',
          800: '#070505',
          900: '#050404',
        },
      },
    },
  },
  plugins: [],
}
