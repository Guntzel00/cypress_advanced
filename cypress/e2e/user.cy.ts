it('Should be able to register a new user', () => {
	cy.visit('https://todo.qacart.com/signup');
	cy.get('[data-testid="first-name"]').type('Gustavo');
});
