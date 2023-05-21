import { initialize, mswDecorator } from 'msw-storybook-addon';

import { mockSeed } from '../src//mocks/seed';
import { mockHandlers } from '../src/mocks/browser';
import '../src/styles/globals.css';

// Initialize MSW
mockSeed();
initialize({});

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  msw: {
    handlers: mockHandlers,
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [mswDecorator];
