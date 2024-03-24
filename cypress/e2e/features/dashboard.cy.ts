describe('features/dashboard', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should follow happy flow', () => {
    cy.findByTestId('root-page').should('exist');
  });
});
