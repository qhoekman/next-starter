import React from 'react';
import { initialize, mswDecorator, mswLoader } from 'msw-storybook-addon';

import { MainLayout } from '../src/components/layouts/main/main';
import { Toaster } from '../src/components/toast/toaster';
import { mockHandlers } from '../src/mocks/browser';
import { mockSeed } from '../src/mocks/seed';
import { ThemeProvider } from '../src/providers/theme';
import '../src/styles/globals.css';

// Initialize MSW
mockSeed();
initialize({
  onUnhandledRequest: 'bypass',
});

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  msw: {
    handlers: mockHandlers,
  },
  options: {
    storySort: {
      order: ['Docs', ['Readme', '*'], 'Components', 'Pages', 'Features', '*', 'System'],
      includeNames: true,
    },
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const loaders = [mswLoader];
export const decorators = [
  mswDecorator,
  (Story) => (
    <ThemeProvider enableSystem attribute="class" defaultTheme="light">
      <MainLayout>
        <Story />
        <Toaster />
      </MainLayout>
    </ThemeProvider>
  ),
];
