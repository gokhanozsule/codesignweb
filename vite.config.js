import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'




// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_URL || '/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
      }
    },
  outDir: 'dist'
  }
})
