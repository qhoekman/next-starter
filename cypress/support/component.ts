// ***********************************************************
// This example support/component.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import '@/styles/globals.css';
import React from 'react';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import { mount } from 'cypress/react18';
import { ThemeProvider } from 'next-themes';

import './commands';

const createRouter = () => {
  return {
    pathname: '/',
    route: '/',
    query: {},
    asPath: '/',
    components: {},
    isFallback: false,
    basePath: '',
    events: { emit: cy.spy().as('emit'), off: cy.spy().as('off'), on: cy.spy().as('on') },
    push: cy.spy().as('push'),
    replace: cy.spy().as('replace'),
    reload: cy.spy().as('reload'),
    back: cy.spy().as('back'),
    prefetch: cy.stub().as('prefetch').resolves(),
    beforePopState: cy.spy().as('beforePopState'),
    isLocaleDomain: false,
  };
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
Cypress.Commands.add('mount', (component: React.ReactElement) => {
  return mount(
    React.createElement(
      ThemeProvider,
      {
        defaultTheme: 'light',
        enableSystem: true,
        attribute: 'class',
      },
      React.createElement(RouterContext.Provider, { value: createRouter() as any }, component)
    )
  );
});
