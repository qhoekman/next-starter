import { composeStories } from '@storybook/react';

import * as stories from './textarea.stories';

const { Default: TextareaDefault } = composeStories(stories);

describe('components/Textarea', () => {
  it('should make sure that the Textarea works', () => {
    cy.mount(<TextareaDefault data-testid="textarea"></TextareaDefault>);
    cy.findByTestId('textarea').should('exist');
  });
});
