import { Button } from '@/components/button/button';

describe('Button', () => {
  it('renders correctly', () => {
    cy.mount(<Button>Click me</Button>);
    cy.findByTestId('button').should('exist');
  });

  it('handles click events', () => {
    const onClick = cy.stub().as('onClick');
    cy.mount(<Button onClick={onClick}>Click me</Button>);
    cy.findByTestId('button').click();
    cy.get('@onClick').should('have.been.calledOnce');
  });

  it('applies the correct variant', () => {
    cy.mount(<Button variant="outline">Click me</Button>);
    cy.findByTestId('button').should('have.class', 'border');
  });

  it('applies the correct size', () => {
    cy.mount(<Button size="lg">Click me</Button>);
    cy.findByTestId('button').should('have.class', 'h-11');
  });
});
