import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    fixturesFolder: 'e2e/fixtures',
    specPattern: 'e2e/integration/*.ts',
    screenshotsFolder: 'e2e/screenshots',
    supportFile: 'e2e/support/index.js',
    videosFolder: 'e2e/videos',
    baseUrl: 'http://localhost:8080',
  },
});
