import Todo from '../models/Todo';
import User from '../models/User';

export default class TodoApi {
	addTodo(user: User, todo: Todo) {
		cy.request({
			method: 'POST',
			url: '/api/v1/tasks',
			body: { item: todo.getItem(), isCompleted: todo.getIsCompleted() },
			headers: {
				Authorization: `Bearer ${user.getToken()}`,
			},
		});
	}
}
