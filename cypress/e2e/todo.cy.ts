import TodoApi from '../api/TodoApi';
import UserApi from '../api/UserApi';
import User from '../models/User';

it('Should be able to add a todo', () => {
	const user = new User();

	new UserApi().register(user);

	// Add a todo
	cy.visit('/todo/new');
	cy.get('[data-testid="new-todo"]').type('Be an expert in cypress');
	cy.get('[data-testid="submit-newTask"]').click();
	cy.get('[data-testid="todo-item"]')
		.contains('Be an expert in cypress')
		.should('be.visible');
});

it('Should be able to delete a todo', () => {
	const user = new User();

	new UserApi().register(user).then((response) => {
		user.setToken(response.body.access_token);
		// Add a todo
		new TodoApi().addTodo(user);
	});

	// Delete a todo
	cy.visit('/todo');
	cy.get('[data-testid="delete"]').click();
	cy.get('[data-testid="no-todos"]').should('be.visible');
});
