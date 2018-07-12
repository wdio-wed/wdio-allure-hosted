describe('Api Page', function () {
  it('should load', function () {
    browser.url('./api.html');

    const title = browser.getTitle();

    console.log(`Api page title ${title}`);
  })
})