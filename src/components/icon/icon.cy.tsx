import { composeStories } from '@storybook/react';

import * as stories from './icon.stories';

const { Default: IconDefault } = composeStories(stories);

describe('components/Icon', () => {
  it('should make sure that the Icon works', () => {
    cy.mount(<IconDefault data-testid="icon"></IconDefault>);
    cy.findByTestId('icon').should('exist');
  });
});
