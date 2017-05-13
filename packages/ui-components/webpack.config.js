const Merge = require('deepmerge');
const Path = require('path');
const NodeExternals = require('webpack-node-externals');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const CommonConfig = {
  target: 'web',

  entry: {
    "amd-angular-ui": "./src/index"
  },

  output: {
    path: Path.join(__dirname, '..', '..', 'dist', 'amd-angular-ui', 'bundles'),
    library: 'amd-angular-ui'
  },

  resolve: {
    extensions: ['.ts', '.js']
  },

  externals: [NodeExternals({
    whitelist: [

    ],
    modulesFromFile: true
  })],

  plugins: [
    new CopyWebpackPlugin([
      {
        from: 'package.json',
        to: '../package.json'
      }
    ])
  ],

  module: {
    rules: [{
      test: /\.html$/,
      use: 'html-loader'
    }, {
      test: /\.ts$/,
      use: [
        'ts-loader',
        'angular2-template-loader',
        {
          loader: 'tslint-loader',
          query: {
            emitErrors: true,
            failOnHint: true,
            typeCheck: true
          }
        }
      ]
    }]
  }
};

module.exports = [
  Merge(CommonConfig, {
    output: {
      filename: '[name].umd.js',
      libraryTarget: 'umd'
    }
  })
  // Merge(CommonConfig, {
  //   output: {
  //     filename: '[name].module.js',
  //     libraryTarget: 'es6' | 'es2015' | 'module' // waiting on this: https://github.com/webpack/webpack/issues/2933
  //   }
  // })
];