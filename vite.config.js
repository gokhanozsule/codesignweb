import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'


/* function fixModelPaths() {
  return {
    name: 'fix-model-paths',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url.startsWith('/codesignweb/models/')) {
          req.url = req.url.replace('/codesignweb/models/', '/models/');
        }
        else if (req.url.startsWith('/Works/models/')) {
          req.url = req.url.replace('/Works/models/', '/models/');
        }
        else if (req.url.startsWith('/assets/')) {
          req.url = req.url.replace('/assets/', '/codesignweb/assets/');
        }
        next();
      });
    }
  }
} */

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()/* , fixModelPaths() */],
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
