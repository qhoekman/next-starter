import { composeStories } from '@storybook/react';

import * as stories from './label.stories';

const { Default: LabelDefault } = composeStories(stories);

describe('components/Label', () => {
  it('should make sure that the Label works', () => {
    cy.mount(<LabelDefault data-testid="label"></LabelDefault>);
    cy.findByTestId('label').should('exist');
  });
});
