import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom', // Agar bisa simulasi browser (DOM)
    globals: true,        // Agar bisa pakai 'expect' tanpa import di tiap file
    setupFiles: './vitest.setup.js',
  },
})