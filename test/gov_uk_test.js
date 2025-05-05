
Feature('Basic Gov.uk tests', { retries: 1 });


Scenario('open homepage', ({govUKHomePage, I}) => {
  govUKHomePage.go();
  I.see('GOV.UK');
});

Scenario('search for Ministry of Justice', ({govUKHomePage, govUKSearchResultsPage, govUKMOJPage}) => {
  const SEARCH_TERM = 'ministry of j';
  const MOJ = 'Ministry of Justice';
  govUKHomePage.go();
  govUKHomePage.searchForAndSelect(SEARCH_TERM);
  govUKSearchResultsPage.selectResult(MOJ);
  govUKMOJPage.onLandingPage();
});
