import { composeStories } from '@storybook/react';

import * as stories from './button.stories';

const { Default: ButtonDefault } = composeStories(stories);

describe('components/Button', () => {
  it('should make sure that the Button works', () => {
    cy.mount(<ButtonDefault data-testid="button"></ButtonDefault>);
    cy.findByTestId('button').should('exist');
  });
});
