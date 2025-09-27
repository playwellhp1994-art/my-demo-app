describe('Demo App', () => {
  it('loads homepage', () => {
    cy.visit('http://localhost:3000');
    cy.contains('Hello, world');
  });

  it('loads login page', () => {
    cy.visit('http://localhost:3000/login');
    cy.contains('Login Page');
  });
});
