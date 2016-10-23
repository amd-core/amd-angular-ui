var HtmlWebpackPlugin = require('html-webpack-plugin');
var AutoPrefixer = require('autoprefixer');
var path = require('path');
var webpack = require('webpack');

var isProduction = process.env.NODE_ENV === 'production';

var plugins = require('./config/webpack.plugins.js');
var loaders = require('./config/webpack.loaders.js');

var config = {
	target: 'web',
	entry: {
		'app': './src/index.ts',
	},
	output: {
		path: './dist/',
		filename: '[name].js',
		sourceMapFilename: '[name].map.js'
	},
	resolve: {
		extensions: ['', '.webpack.js', '.web.js', '.ts', '.js'],
		root: [path.resolve('./src')],
		alias: {
			config: path.join(__dirname, 'src', 'modules', 'app', 'config', process.env.NODE_ENV + '.ts')
		}
	},
	plugins: plugins,
	module: {
		loaders: loaders,
		postcss: [
			AutoPrefixer({
				browsers: [
					'last 3 Chrome versions',
					'last 3 Firefox versions',
					'Explorer >= 9',
					'last 3 Edge versions',
					'last 3 iOS versions',
					'last 3 Safari versions',
					'last 3 Opera versions',
					'last 3 ExplorerMobile versions',
					'last 3 Android versions',
					'last 3 BlackBerry versions',
					'last 3 ChromeAndroid versions',
					'last 3 FirefoxAndroid versions',
					'last 3 OperaMobile versions',
					'last 3 OperaMini versions',
					'last 3 Samsung versions',
					'last 3 UCAndroid versions'
				]
			})
		]
	},
	tslint: {
		emitErrors: true,
		failOnHint: true,
	}
};

if (!isProduction) {
	config.devtool = 'cheap-module-source-map';
	config.debug = true;
	config.devServer = {
		contentBase: "./dist",
		inline: true,
		historyApiFallback: true
	};
}

module.exports = config;