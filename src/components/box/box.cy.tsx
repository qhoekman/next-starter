import { composeStories } from '@storybook/react';

import * as stories from './box.stories';

const { Default: BoxDefault } = composeStories(stories) as any; // TODO: Fix types

describe('components/Box', () => {
  it('should make sure that the Box works', () => {
    cy.mount(<BoxDefault data-testid="box"></BoxDefault>);
    cy.findByTestId('box').should('exist');
  });
});
