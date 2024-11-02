import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    coverage: {
      include: ['src/components/**'],
      exclude: [
        'src/components/**/index.ts',
        'src/components/**/story',
        'src/components/**/test',
      ],
    },
    setupFiles: ['./setupTests.ts'],
  },
})
