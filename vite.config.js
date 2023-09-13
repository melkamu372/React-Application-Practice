import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './vite-deploy/',
  server: {
    hmr: {
      protocol: 'wss',
      mimeTypes: {
        'application/javascript': ['js', 'mjs', 'jsx'], // Include 'jsx' in the 'application/javascript' MIME type
      },
    },
  },
})