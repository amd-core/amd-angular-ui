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
			}),
			new HtmlWebpackPlugin({
				template: './src/index.html',
				minify: {
					html5: true,
					caseSensitive: true,
					collapseInlineTagWhitespace: true,
					collapseWhitespace: true,
					conservativeCollapse: true,
					decodeEntities: true,
					keepClosingSlash: true,
					removeComments: true,
					minifyCSS: true,
					minifyJS: true
				}
			})
		);
	} else { plugins.push(new HtmlWebpackPlugin({ template: './src/index.html' })); }

	return plugins;
}

module.exports = getPlugins();