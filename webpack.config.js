const HtmlWebpackPlugin = require('html-webpack-plugin');
const Path = require('path');
const Webpack = require('webpack');

module.exports = {
	target: 'web',
	entry: {
		'app': './demo/main',
	},
	output: {
		path: Path.join(__dirname, 'dist', 'demo'),
		filename: '[name].js'
	},
	devServer: {
		contentBase: "./dist/demo",
		inline: true,
		historyApiFallback: true
	},
	resolve: {
		// mainFields: ["es2015", "module", "main"],
		modules: [Path.resolve(__dirname, 'dist'), 'node_modules'],
		extensions: ['.ts', '.js']
	},
	plugins: [
    new Webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)@angular/,
      Path.join(__dirname, 'dist', 'demo'), {}
    ),
		new HtmlWebpackPlugin({
			template: './demo/index.html'
		})
	],
	module: {
		rules: [{
				test: /\.html$/,
				loader: 'html-loader'
			},
			{
				test: /\.ts$/,
				use: ['ts-loader', 'angular2-template-loader']
			},
      {
        test: /\.scss$/,
        include: Path.join(__dirname, 'demo'),
        use: ['raw-loader', 'sass-loader'],
      },
      {
        test: /\.css$/,
        exclude: Path.join(__dirname, 'demo'),
				use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        exclude: Path.join(__dirname, 'demo'),
				use: ['style-loader', 'css-loader', 'sass-loader']
      }
		]
	}
};