import { composeStories } from '@storybook/react';

import * as stories from './text.stories';

const { Default: TextDefault } = composeStories(stories);

describe('components/Text', () => {
  it('should make sure that the Text works', () => {
    cy.mount(<TextDefault data-testid="text"></TextDefault>);
    cy.findByTestId('text').should('exist');
  });
});
