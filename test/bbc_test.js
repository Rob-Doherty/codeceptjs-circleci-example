
Feature('Basic BBC tests', { retries: 1 });

  const HOMEPAGE = 'https://www.bbc.co.uk';
  const LONDON_OPTION = 'London, Greater London';

Scenario('open homepage', ({I}) => {
  I.amOnPage(HOMEPAGE);
  I.see('BBC');
});

Scenario('search for London weather', ({I}) => {
  I.amOnPage(HOMEPAGE);
  I.waitForText('BBC');
  I.click({css: 'li a[href="https://www.bbc.co.uk/weather"]'});
  I.fillField({css: '#ls-c-search__input-label'}, 'london');
  I.waitForText(LONDON_OPTION);
  I.click(LONDON_OPTION, '#location-list');
  I.see('Forecast for London');
  I.seeInCurrentUrl('bbc.co.uk/weather/2643743');
});
