
Feature('GitHub', { retries: 1 });

Scenario('open homepage', ({I}) => {
  I.amOnPage('https://github.com/');
  I.see('GitHub');
});

Scenario('search for Rob-Doherty', ({I}) => {
  I.amOnPage('https://github.com/');
  I.click({css: 'button.header-search-button'});
  I.fillField({css: 'input.QueryBuilder-Input'}, 'Rob-Doherty');
  I.click({css: 'li[data-value="Rob-Doherty"]'});
  I.saveScreenshot('debug1.png');
  I.waitForNavigation();
  I.click({css: 'a[data-testid="nav-item-users"]'});
  within('//div[@data-testid="results-list"]', () => {
    I.see('Rob-Doherty');
    I.click('Rob-Doherty');
  });
  I.seeInCurrentUrl('github.com/Rob-Doherty');
});
