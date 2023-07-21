import { setupWorker } from 'msw';

import { mockSeed } from '@/mocks/seed';

export const mockHandlers = [];

export const worker = () => {
  mockSeed();

  return setupWorker(...mockHandlers);
};
