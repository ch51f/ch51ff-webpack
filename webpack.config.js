var webpack = require('webpack');
var path = require('path');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
	entry: path.resolve(__dirname, process.env.cd + '/main'),
	output: {
		path: __dirname + '/build',
		publicPath: '/',
		filename: './bundle.js'
	},
	module: {
		loaders: [
			{test: /\.css$/, loader: 'style-loader!css-loader'},
			{test: /\.less$/, loader: 'style-loader!css-loader!less-loader'},
			{test: /\.js[x]?$/, exclude: /node_modules/, loader: 'babel', query: {presets: ['es2015', 'react']}},
			{test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'},
		]
	},
	resolve: {
		extensions: ['', '.js', '.jsx'],
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new OpenBrowserPlugin({url: 'http://localhost:8080'})
	]
};