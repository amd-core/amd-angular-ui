module.exports = {
  module: {
    rules: [{
      test: /\.ts$/,
      use: [
        {
          loader: 'ts-loader',
          options: {
            configFile: 'demo/tsconfig.base.json'
          }
        },
        'angular2-template-loader'
      ]
    }]
  }
};