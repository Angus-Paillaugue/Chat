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
        primary:   {
          '50': '#edf6f7', 
          '100': '#dfeff2', 
          '200': '#afd3db', 
          '300': '#85b9c7', 
          '400': '#44869e', 
          '500': '#155674', 
          '600': '#114a69', 
          '700': '#0b3957', 
          '800': '#082945', 
          '900': '#041c33', 
          '950': '#020f21'
      },
        "text-main":"#2D2E32",
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
  darkMode: 'class'
}