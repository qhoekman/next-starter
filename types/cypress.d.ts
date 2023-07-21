import { mount } from 'cypress/react';

declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount;
    }
  }
  interface Window {
    msw: {
      worker: SetupWorkerApi;
      rest: typeof rest;
    };
  }
}
