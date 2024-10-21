/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        navbarGreen: 'rgb(81, 181, 4)',
        logoTxt: 'rgb(2, 46, 80)',
        txtNav: 'rgb(0, 0, 0)',
        bgColor: 'rgb(209, 255, 209)',
      }
    },
  },
  plugins: [],
}

