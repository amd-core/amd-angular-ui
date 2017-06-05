
module.exports = function(config) {
  config.set({
    basePath: 'packages/ui-components',
    frameworks: ['jasmine', 'karma-typescript'],
    files: [
      'components/index.spec.ts',
      {
        pattern: 'components/**/*.+(ts|html)'
      },
      {
        pattern: 'test/**/*.ts'
      }
    ],
    exclude: [
    ],
    preprocessors: {
      '**/*.ts': ['karma-typescript']
    },
    karmaTypescriptConfig: {
      bundlerOptions: {
        entrypoints: /\.spec\.ts$/,
        transforms: [
          require('karma-typescript-angular2-transform')
        ]
      },
      compilerOptions: {
        lib: ['ES2015', 'DOM']
      },
      tsconfig: 'tsconfig.test.json'
    },
    reporters: ['progress', 'karma-typescript'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['PhantomJS'],
    singleRun: true,
    concurrency: Infinity
  })
}
