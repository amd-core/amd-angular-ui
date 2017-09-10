const Webpack = require('webpack');
const NgTools = require('@ngtools/webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const NodeExternals = require('webpack-node-externals');
const path = require('path');

module.exports = {
  target: 'node',
  entry: {
    server: [
      './demo/src/server/app-server.module.ts',
      './demo/src/server/main.ts'
    ]
  },

  node: {
    __dirname: false,
    __filename: false,
  },

  output: {
    path: path.resolve(__dirname, '..', 'build'),
    filename: '[name].js',
    publicPath: '/public/'
  },
  resolve: {
    mainFields: ['module', 'main'],
    extensions: ['.ts', '.js', '.json']
  },
  externals: [NodeExternals()],
  module: {
    rules: [{
      test: /\.html$/,
      use: 'html-loader'
    },
    {
      test: /\.scss$/,
      use: ['raw-loader', 'sass-loader']
    },
    {
      test: /\.ts$/,
      use: [
        '@ngtools/webpack'
      ]
    }, {
      test: /\.(gif|png|jpe?g|svg|ico)$/i,
      loaders: [
        {
          loader: 'file-loader',
          query: {
            name: 'images/[name].[hash].[ext]',
            hash: 'sha512',
            digest: 'hex'
          }
        }
      ]
    }, {
      test: /\.(woff|woff2|ttf|eot)$/,
      use: [{
        loader: 'file-loader',
        query: {
          name: 'fonts/[name].[hash].[ext]'
        }
      }]
    }
    ]
  },
  plugins: [
    new Webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)@angular/,
      './src', {}
    ),
    new Webpack.NoEmitOnErrorsPlugin(),
    new NgTools.AotPlugin({
      skipCodeGeneration: true,
      replaceExport: false,
      entryModule: 'demo/src/server/app-server.module.ts#AppServerModule',
      tsConfigPath: 'demo/tsconfig.server.json'
    }),
    new CleanWebpackPlugin(['./build'], {
      root: path.resolve(__dirname, '..'),
      exclude: './build/public'
    })
  ]
};