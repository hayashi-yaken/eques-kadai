import { defineConfig } from 'vitest/config'

export default defineConfig({
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    coverage: { include: ['src/**'] },
    setupFiles: ['./setupTests.ts'],
  },
})
