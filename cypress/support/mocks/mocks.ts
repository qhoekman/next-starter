import { rest } from 'msw';

import { worker } from '../../../src/mocks/browser';

const instanceWorker = worker();

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
window.msw = {
  worker: instanceWorker,
  rest,
};

Cypress.on('test:before:run:async', async (): Promise<void> => {
  await instanceWorker.start();
});
