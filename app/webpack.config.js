let path = require('path');

let srcPath = path.resolve(__dirname);

const config = {
	entry: './index.js',
	output: {
		filename: 'bundle.js',
		path: __dirname+'/assets'
	},
	module: {
		rules: [
			{ test: /\.css$/, use: 'css-loader' },
			{ test: /\.js$/, use: 'babel-loader' }
		]
	},
};


module.exports = config;