import User from '../models/User';

it('Should be able to register a new user', () => {
	const user = new User();

	cy.visit('/signup');
	cy.get('[data-testid="first-name"]').type(user.getFirstName());
	cy.get('[data-testid="last-name"]').type(user.getLastName());
	cy.get('[data-testid="email"]').type(user.getEmail());
	cy.get('[data-testid="password"]').type(user.getPassword());
	cy.get('[data-testid="confirm-password"]').type(user.getPassword());
	cy.get('[data-testid="submit"]').click();
	cy.get('[data-testid="welcome"]').should('be.be.visible');
});
