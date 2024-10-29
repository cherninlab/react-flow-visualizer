import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },

  css: {
    modules: {
      localsConvention: 'camelCase',
      generateScopedName: '[hash:base64:8]',
    },
    devSourcemap: true,
  },
})
