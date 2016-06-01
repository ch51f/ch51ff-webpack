var path = require('path')
var webpack = require("webpack")

module.exports = {
	devtool: 'cheap-module-eval-source-map',
	entry: [
		'webpack-hot-middleware/client',
		path.resolve(__dirname, process.env.cd + "/main")
	],

	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/static/'
	},
	plugins: [
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin()
	],
	module: {
		loaders: [
			{test: /\.js[x]?$/, exclude: /node_modules/, loader: 'babel', query: {presets: ['es2015', 'react']}}
		]
	}
}