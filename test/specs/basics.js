const assert = require('assert');

describe('react-server-side-rendering-with-css-modules example', () => {
  it('launches correctly', () => {
    browser.url('http://localhost:3000');
    const title = browser.getTitle();
    assert.equal(title, 'Express');
  });

  it('"Home" to "About"', () => {
    browser.url('http://localhost:3000');
    assert.equal(browser.getText('h2'), 'Home...');
    assert.equal(browser.getText('h3+ul'), 'yeah!\nbaam!\nbaaa!');
    browser.click('=About');
    assert.equal(browser.getUrl(), 'http://localhost:3000/about');
    assert.equal(browser.getText('h2'), 'About...');
  });

  it('"About" to "Home"', () => {
    browser.url('http://localhost:3000/about');
    assert.equal(browser.getText('h2'), 'About...');
    browser.click('=Home');
    assert.equal(browser.getUrl(), 'http://localhost:3000/');
    assert.equal(browser.getText('h2'), 'Home...');
    assert.equal(browser.getText('h3+ul'), 'yeah!\nbaam!\nbaaa!');
  });
});
