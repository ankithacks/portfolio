/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'orange':'#FE7A36',
        'navy':'#280274',
        'blue':'#403BCA',
        'lime':'#D5F08F',
        'off-white':'#E9F6FF'
      }
    },
  },
  plugins: [],
}

