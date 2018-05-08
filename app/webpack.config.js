let path = require('path');

var webpack = require('webpack')

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
	plugins:[
		new webpack.optimize.UglifyJsPlugin({
			comments: false
		}),
	]
};


module.exports = config;