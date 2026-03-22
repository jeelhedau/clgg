import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
   plugins: [
    tailwindcss(),react(),
  ],
  // fontFamily:{
  //   sans:["poppins","sans-serif"],
  //   cursive:["Pacitico","Sriracha","cursive"],
  //   cursive2:["Sriracha","cursive"]
  // }
})
