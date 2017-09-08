const WebpackMerge = require('webpack-merge');

const CommonConfig = require('./demo/config/webpack.common.js');

module.exports = WebpackMerge(CommonConfig, {
  module: {
    rules: [{
      test: /\.ts$/,
      use: [
        {
          loader: 'ts-loader',
          options: {
            configFile: 'demo/tsconfig.app.json'
          }
        },
        'angular2-template-loader'
      ]
    }]
  }
});
