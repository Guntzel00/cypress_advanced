export default class Todo {
	private isCompleted: boolean;
	private item: string;

	constructor(item: string, isCompleted: boolean) {
		this.item = item;
		this.isCompleted = false;
	}

	getItem() {
		return this.item;
	}
	getIsCompleted() {
		return this.isCompleted;
	}
}
