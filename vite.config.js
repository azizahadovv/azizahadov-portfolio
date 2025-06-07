import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  root: 'client',
  server: {
    host: '0.0.0.0',
    port: 5000
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'client/src'),
    }
  },
  publicDir: path.resolve(__dirname, 'attached_assets'),
  build: {
    outDir: '../dist',
    emptyOutDir: true
  }
})