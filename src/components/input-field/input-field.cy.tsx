import { composeStories } from '@storybook/react';

import * as stories from './input-field.stories';

const { Default: InputFieldDefault } = composeStories(stories);

describe('components/InputField', () => {
  it('should make sure that the InputField works', () => {
    cy.mount(<InputFieldDefault data-testid="input-field"></InputFieldDefault>);
    cy.findByTestId('input-field').should('exist');
  });
});
