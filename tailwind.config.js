/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        amazonclone:{
          background: "#EAEDED",
          light_blue: " #232f3A",
          yellow: "#FEBD69",
          DEFAULT: "#131921"
        }
      }



    },
  },
  plugins: [],
}