require('ts-node/register');
const browserstack = require('browserstack-local');

exports.config = {
  framework: 'jasmine',
  specs: ['packages/ui-components/test/e2e/test.spec.ts'],
  seleniumAddress: 'http://hub-cloud.browserstack.com/wd/hub',

  commonCapabilities: {
    'browserstack.user': process.env.BROWSERSTACK_USER,
    'browserstack.key': process.env.BROWSER_STACK_ACCESS_KEY,
    'browserstack.local': true,
    'browserstack.debug': true,
    'build': 'AMD Core Angular UI',
    'name': 'Integration Tests'
  },

  multiCapabilities: [{
    browserName: 'Chrome'
  }, {
    browserName: 'Safari'
  }, {
    browserName: 'Firefox'
  }, {
    browserName: 'IE'
  }],

  beforeLaunch: function () {
    console.log("Connecting local");
    return new Promise((resolve, reject) => {
      exports.bs_local = new browserstack.Local();
      exports.bs_local.start({
        'key': exports.config.commonCapabilities['browserstack.key']
      }, (error) => {
        if (error) { return reject(error) };

        console.log('Connected. Now testing...');
        return resolve();
      });
    });
  },

  afterLaunch: function () {
    return new Promise((resolve, reject) => {
      exports.bs_local.stop(resolve);
    });
  }
};

exports.config.multiCapabilities.forEach((caps) => {
  for (let i in exports.config.commonCapabilities) {
    caps[i] = caps[i] || exports.config.commonCapabilities[i]
  };
});
