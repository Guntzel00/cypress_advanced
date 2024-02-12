import { defineConfig } from 'cypress';

export default defineConfig({
	e2e: {
		reporter: 'cypress-mochawesome-reporter',
		video: true,
		baseUrl: 'https://todo.qacart.com',
		setupNodeEvents(on, config) {
			require('cypress-mochawesome-reporter/plugin')(on);
		},
	},
});
