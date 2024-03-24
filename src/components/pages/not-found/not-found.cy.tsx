import { composeStories } from '@storybook/react';

import * as stories from './not-found.stories';

const { Default: NotFoundPageDefault } = composeStories(stories);

describe('pages/NotFound', () => {
  it('should make sure that the NotFoundPage works', () => {
    cy.mount(<NotFoundPageDefault></NotFoundPageDefault>);
    cy.findByTestId('not-found-page').should('exist');
  });
});
