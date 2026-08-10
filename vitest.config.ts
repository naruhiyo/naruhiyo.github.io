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
    environmentOptions: {
      jsdom: {
        url: 'http://localhost/'
      }
    },
    // Node 26 の実験的 webstorage が jsdom の window.localStorage を
    // undefined で上書きするため無効化する（Vitest 4 では execArgv がトップレベル）
    pool: 'forks',
    execArgv: ['--no-experimental-webstorage'],
    include: ['__tests__/**/*.test.ts', '__tests__/**/*.test.tsx'],
    setupFiles: ['./__tests__/setup.ts']
  }
});
