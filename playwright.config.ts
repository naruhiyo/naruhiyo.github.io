import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  use: {
    baseURL: 'http://localhost:4173',
    headless: true
  },
  webServer: {
    command: 'pnpm build && pnpm preview',
    port: 4173,
    reuseExistingServer: !process.env.CI
  }
});
