require('ts-node/register');

exports.config = {
  framework: 'jasmine',
  specs: ['packages/ui-components/test/e2e/spec.ts']
};
