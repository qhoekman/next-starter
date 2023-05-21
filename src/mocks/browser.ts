import { mockSeed } from '@/mocks/seed';
import { setupWorker } from 'msw';

export const mockHandlers = [];

export const worker = () => {
  mockSeed();

  return setupWorker(...mockHandlers);
};
