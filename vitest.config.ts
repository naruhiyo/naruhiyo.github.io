import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, 'src')
    }
  },
  test: {
    environment: 'jsdom',
    include: ['__tests__/**/*.test.ts', '__tests__/**/*.test.tsx'],
    setupFiles: ['./__tests__/setup.ts']
  }
});
