import TodoApi from '../api/TodoApi';
import Todo from '../models/Todo';
import User from '../models/User';

export default class NewTodoPage {
	private get newTodoInput() {
		return '[data-testid="new-todo"]';
	}

	private get submitButton() {
		return '[data-testid="submit-newTask"]';
	}

	load() {
		cy.visit('/todo/new');
	}

	addTodo(todoItem: Todo) {
		cy.get(this.newTodoInput).type(todoItem.getItem());
		cy.get(this.submitButton).click();
	}

	addTodoUsingAPI(user: User, todo: Todo) {
		return new TodoApi().addTodo(user, todo);
	}
}
