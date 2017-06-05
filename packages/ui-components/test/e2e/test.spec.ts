import { browser } from 'protractor';

describe('Protractor Demo App', () => {
  it('should have a title', () => {
    browser.get('http://juliemr.github.io/protractor-demo/');

    browser.getTitle()
      .then((value: string) => {
        expect(value).toEqual('Super Calculator');
      });
  });
});
