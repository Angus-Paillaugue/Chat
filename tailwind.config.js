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
        primary: { 50: '#fcf7f2', 100: '#fcf1e8', 200: '#f7d7c3', 300: '#f2b9a0', 400: '#eb7560', 500: '#e12323', 600: '#c91c1c', 700: '#a81414', 800: '#870e0e', 900: '#660707', 950:"#420303"},
        "text-main":"#2D2E32",
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
  darkMode: 'class'
}