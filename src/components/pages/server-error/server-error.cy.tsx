import { composeStories } from '@storybook/react';

import * as stories from './server-error.stories';

const { Default: ServerErrorPageDefault } = composeStories(stories);

describe('pages/ServerError', () => {
  it('should make sure that the ServerErrorPage works', () => {
    cy.mount(<ServerErrorPageDefault></ServerErrorPageDefault>);
    cy.findByTestId('server-error-page').should('exist');
  });
});
