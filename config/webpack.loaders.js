var isProduction = process.env.NODE_ENV === 'production';

function getLoaders() {
	return [
		{ test: /\.html$/, loader: 'html' },
		{ test: /\.ts$/, loader: 'ts!tslint' },
		{ test: /\.css$/, loader: 'css-to-string!css!postcss' },
		{ test: /\.scss$/, loader: 'css-to-string!css!postcss!sass' },
		{ test: /\.(jpg|jpeg|png|gif|svg|ico)$/i, loader:'file?name=[name].[ext]&context=./src/assets/img' },
		{ test: /\.(otf|eot|svg|ttf|woff|woff2)/i, loader : 'file?name=[name].[ext]' }
	];
}

module.exports = getLoaders();