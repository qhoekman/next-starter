import { composeStories } from '@storybook/react';

import * as stories from './input.stories';

const { Default: InputDefault } = composeStories(stories);

describe('components/Input', () => {
  it('should make sure that the Input works', () => {
    cy.mount(<InputDefault data-testid="input"></InputDefault>);
    cy.findByTestId('input').should('exist');
  });
});
