const Webpack = require('webpack');
const WebpackMerge = require('webpack-merge');
const NgTools = require('@ngtools/webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const EnvConfig = require('./env');
const CommonConfig = require('./webpack.common');

module.exports = WebpackMerge(CommonConfig, {
  module: {
    rules: [{
      test: /\.ts$/,
      use: [
        '@ngtools/webpack'
      ]
    }]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'demo/src/index.html',
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
    }),
    new Webpack.NoEmitOnErrorsPlugin(),
    new Webpack.optimize.UglifyJsPlugin({
      mangle: true,
      compress: {
        warnings: false
      },
      comments: false
    }),
    new NgTools.AotPlugin({
      skipCodeGeneration: true,
      replaceExport: false,
      mainPath: 'src/main.ts',
      tsConfigPath: 'demo/tsconfig.app.json'
    })
  ]
});
