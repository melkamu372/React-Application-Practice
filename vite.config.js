import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:'./vite-deploy/',
  server: {
    hmr: {
      protocol: 'wss',
      mimeTypes: {
        'application/javascript': ['js', 'mjs'],
        'text/javascript': ['jsx'],
      },
    },
  },

})
