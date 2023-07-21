import { defineConfig } from 'cypress';
import path from 'path';
import dotenv from 'dotenv';
import fs from 'fs';
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

fs.existsSync('.env.local') ? dotenv.config({ path: '.env.local' }) : dotenv.config({ path: '.env' });

export default defineConfig({
  component: {
    env: {
      ...process.env,
    },
    devServer: {
      framework: 'next',
      bundler: 'webpack',
      webpackConfig: {
        resolve: {
          plugins: [new TsconfigPathsPlugin({ configFile: path.resolve(__dirname, 'tsconfig.json') })],
        },
      },
    },
  },

  e2e: {
    env: {
      ...process.env,
    },
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
