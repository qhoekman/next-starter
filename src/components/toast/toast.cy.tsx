import { composeStories } from '@storybook/react';

import * as stories from './toast.stories';

const { Default: ToastDefault } = composeStories(stories);

describe('components/Toast', () => {
  it('should make sure that the Toast works', () => {
    cy.mount(<ToastDefault data-testid="toast"></ToastDefault>);
    cy.findByTestId('toast').should('exist');
  });
});
