import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/eco/',   // <-- WAJIB untuk GitHub Pages
  plugins: [vue()],
  server: {
    host: true,
    allowedHosts: true,
  },
})
