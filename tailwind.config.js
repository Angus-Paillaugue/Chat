/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,svelte}',
    "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans:["Poppins"]
      },
      colors: {
        primary: { 50: '#fffbf2', 100: '#fcf4e6', 200: '#fae2be', 300: '#f7cd99', 400: '#f09951', 500: '#ea580c', 600: '#d44e0b', 700: '#b03a07', 800: '#8c2b04', 900: '#691c02', 950:"#451101"},
        "text-main":"#2D2E32"
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
  darkMode: 'class'
}