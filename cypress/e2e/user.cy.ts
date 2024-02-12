import User from '../models/User';
import RegisterPage from '../pages/RegisterPage';
import TodoPage from '../pages/todoPage';

it('Should be able to register a new user', () => {
	const user = new User();
	const registerPage = new RegisterPage();
	registerPage.load();
	registerPage.registerForm(user);

	const todoPage = new TodoPage();

	todoPage.getWelcomeMessage().should('be.be.visible');
});
