import { composeStories } from '@storybook/react';

import * as stories from './root.stories';

const { Default: RootPageDefault } = composeStories(stories);

describe('pages/Root', () => {
  it('should make sure that the RootPage works', () => {
    cy.mount(<RootPageDefault></RootPageDefault>);
    cy.findByTestId('root-page').should('exist');
  });
});
