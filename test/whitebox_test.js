
Feature('Whitebox', { retries: 1 });

Scenario('open homepage', ({whiteboxHomePage, I}) => {
  whiteboxHomePage.go();
  I.see('WhiteBox\n' + 'IT Solutions');
});

Scenario('follow github link in menu', ({whiteboxHomePage}) => {
  whiteboxHomePage.go();
  whiteboxHomePage.openMenu();
  whiteboxHomePage.clickGithubLink();
});
