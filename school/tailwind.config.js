/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'Yankees-Blue': '#22223B',
        'Alabaster': '#F2E9E4',
      },
    },
  },
  plugins: [],
}
