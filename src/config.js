require('babel-polyfill');

const environment = {
	development: {
		isProduction: false
	},
	production: {
		isProduction: true
	}
}[process.env.NODE_ENV || 'development'];

module.exports = Object.assign({
	API_ROOT:'/api/kugou_live',
	host: 'localhost',
	port: 3000,
	apiHost: 'localhost',
	apiPort: 3030,
	app: {
		title: '胖熊一元买',
		description: 'All the modern best practices in one example.',
		head: {
			titleTemplate: 'Bear Vue Example: %s'
		}
	},

}, environment);
