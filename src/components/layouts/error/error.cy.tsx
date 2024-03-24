import { composeStories } from '@storybook/react';

import * as stories from './error.stories';

const { Default: ErrorLayoutDefault } = composeStories(stories);

describe('layouts/ErrorLayout', () => {
  it('should make sure that the ErrorLayout works', () => {
    cy.mount(<ErrorLayoutDefault></ErrorLayoutDefault>);
    cy.findByTestId('error').should('exist');
  });
});
