import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
   build: {
    rollupOptions: {
      input: {
        main: './index.html',
        about: './about.html', 
        contact: './contact.html',
        menu:"./menu",
      }
    }
  }
})
