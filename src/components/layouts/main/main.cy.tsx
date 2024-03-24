import { composeStories } from '@storybook/react';

import * as stories from './main.stories';

const { Default: MainLayoutDefault } = composeStories(stories);

describe('layouts/MainLayout', () => {
  it('should make sure that the MainLayout works', () => {
    cy.mount(<MainLayoutDefault></MainLayoutDefault>);
    cy.findByTestId('main').should('exist');
  });
});
