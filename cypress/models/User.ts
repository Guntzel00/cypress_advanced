import { faker } from '@faker-js/faker';

export default class User {
	private firstName: string;
	private lastName: string;
	private email: string;
	private password: string;
	private token: string;

	constructor() {
		this.firstName = faker.person.firstName();
		this.lastName = faker.person.lastName();
		this.email = faker.internet.email();
		this.password = 'Teste1234';
	}

	getFirstName() {
		return this.firstName;
	}
	getLastName() {
		return this.lastName;
	}
	getEmail() {
		return this.email;
	}
	getPassword() {
		return this.password;
	}
	getToken() {
		return this.token;
	}

	setToken(token: string) {
		this.token = token;
	}

	// setFirstName(firstName: string) {
	//     this.firstName = firstName;
	// }
	// setLastName(lastName: string) {
	//     this.lastName = lastName;
	// }
	// setEmail(email: string) {
	//     this.email = email;
	// }
	// setPassword(password: string) {
	//     this.password = password;
	// }
}
