var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var isProduction = process.env.NODE_ENV === 'production';

function getPlugins() {
	var plugins = [ new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en/) ];

	if (isProduction) {
		plugins.push(
			new webpack.optimize.UglifyJsPlugin({
				compress: { warnings: false },
				mangle: false
			})
		);
	}

	return plugins;
}

module.exports = getPlugins();