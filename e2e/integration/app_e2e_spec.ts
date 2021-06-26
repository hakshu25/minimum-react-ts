describe('App Component', () => {
  it('Match title text', () => {
    cy.visit('/');
    cy.findByRole('heading').contains('Hello World');
  });
});
