/// <reference types="vitest" />
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/vitest.setup.ts', // For extending jest-dom matchers
    css: false, // Optional: if you don't need to test CSS
    alias: {
      '@/': new URL('./src/', import.meta.url).pathname,
    },
  },
});
