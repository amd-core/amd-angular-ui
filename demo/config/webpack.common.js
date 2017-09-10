const Webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');

const EnvConfig = require('./env');

const sassLoader = {
  loader: 'sass-loader',
  options: {
    includePaths: ['./src/styles'],
    outputStyle: 'compressed'
  }
};

module.exports = {
  entry: {
    main: './demo/src/main.ts'
  },

  output: {
    path: path.resolve(__dirname, '..', 'build', 'public'),
    filename: 'js/[name].[hash].js',
    chunkFilename: 'js/[id].[hash].chunk.js'
  },

  devServer: {
    contentBase: './build/public',
    inline: true,
    historyApiFallback: true,
    overlay: {
      warnings: true,
      errors: true
    }
  },

  resolve: {
    modules: ['./node_modules'],
    mainFields: ['module', 'browser', 'main'],
    extensions: ['.ts', '.js'],
    alias: {
      '@amd-core/angular-ui': path.resolve(__dirname, '..', '..', 'packages', 'ui-components', 'components')
    }
  },

  module: {
    rules: [{
      test: /\.html$/,
      use: 'html-loader'
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
    },
    {
      test: /\.scss$/,
      include: path.resolve(__dirname, '..', 'src', 'app'),
      use: ['raw-loader', 'postcss-loader', sassLoader],
    },
    {
      test: /\.scss$/,
      exclude: path.resolve(__dirname, '..', 'src', 'app'),
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader', 'postcss-loader', sassLoader]
      })
    }]
  },

  plugins: [
    new Webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)@angular/,
      './src', {}
    ),
    new ExtractTextPlugin('css/[name].[hash].css'),
    new HtmlWebpackPlugin({
      template: 'demo/src/index.html'
    }),
    new Webpack.DefinePlugin({
      ENV: JSON.stringify(EnvConfig.env),
      IS_PRODUCTION: JSON.stringify(EnvConfig.isProduction)
    }),
    new CleanWebpackPlugin(['./build/public'], {
      root: path.resolve(__dirname, '..')
    })
  ]
};