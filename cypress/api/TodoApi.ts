import User from '../models/User';

export default class TodoApi {
	addTodo(user: User) {
		cy.request({
			method: 'POST',
			url: '/api/v1/tasks',
			body: { item: 'Be a cypress expert', isCompleted: false },
			headers: {
				Authorization: `Bearer ${user.getToken()}`,
			},
		});
	}
}
