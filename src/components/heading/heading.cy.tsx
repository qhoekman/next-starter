import { composeStories } from '@storybook/react';

import * as stories from './heading.stories';

const { Default: HeadingDefault } = composeStories(stories);

describe('components/Heading', () => {
  it('should make sure that the Heading works', () => {
    cy.mount(<HeadingDefault data-testid="heading"></HeadingDefault>);
    cy.findByTestId('heading').should('exist');
  });
});
