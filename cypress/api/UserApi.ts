import User from '../models/User';

export default class UserApi {
	register(user: User) {
		return cy.request({
			method: 'POST',
			url: '/api/v1/users/register',
			body: {
				email: user.getEmail(),
				password: user.getPassword(),
				firstName: user.getFirstName(),
				lastName: user.getLastName(),
			},
		});
	}
}
