import Todo from '../models/Todo';
import User from '../models/User';
import NewTodoPage from '../pages/NewTodoPage';
import RegisterPage from '../pages/RegisterPage';
import TodoPage from '../pages/todoPage';

describe('Todo Test Cases', () => {
	let user: User;
	let todoPage: TodoPage;
	let newTodoPage: NewTodoPage;
	let registerPage: RegisterPage;
	let todoItem: Todo;

	beforeEach(() => {
		user = new User();
		todoPage = new TodoPage();
		newTodoPage = new NewTodoPage();
		registerPage = new RegisterPage();
		todoItem = new Todo('Be an expert in cypress');
		registerPage.registerUsingAPI(user);
	});

	it('Should be able to add a todo', () => {
		// Add a todo
		newTodoPage.load();
		newTodoPage.addTodo(todoItem);
		todoPage.getTodoItem().contains(todoItem.getItem()).should('be.visible');
	});

	it('Should be able to delete a todo', () => {
		newTodoPage.addTodoUsingAPI(user, todoItem);

		// Delete a todo
		todoPage.load();
		todoPage.deleteTodo();
		todoPage.getNoTodosMessage().should('be.visible');
	});
});
