import UserApi from '../api/UserApi';
import User from '../models/User';

export default class RegisterPage {
	private get firstNameInput() {
		return '[data-testid="first-name"]';
	}
	private get lastNameInput() {
		return '[data-testid="last-name"]';
	}
	private get emailInput() {
		return '[data-testid="email"]';
	}
	private get passwordInput() {
		return '[data-testid="password"]';
	}
	private get confirmPasswordInput() {
		return '[data-testid="confirm-password"]';
	}
	private get submitButton() {
		return '[data-testid="submit"]';
	}

	load() {
		cy.visit('/signup');
	}

	registerForm(user: User) {
		cy.get(this.firstNameInput).type(user.getFirstName());
		cy.get(this.lastNameInput).type(user.getLastName());
		cy.get(this.emailInput).type(user.getEmail());
		cy.get(this.passwordInput).type(user.getPassword());
		cy.get(this.confirmPasswordInput).type(user.getPassword());
		cy.get(this.submitButton).click();
	}

	registerUsingAPI(user: User) {
		return new UserApi().register(user);
	}
}
