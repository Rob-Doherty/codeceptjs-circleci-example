
'use strict';

let I;
const HOMEPAGE = 'https://www.gov.uk';

module.exports = {

  _init() {
    I = actor();
  },

  // locators
  searchBox: 'input[type="search"]',
  autoCompleteList: 'li.gem-c-search-with-autocomplete__option',

  // methods
  go() {
    I.amOnPage(HOMEPAGE);
  },

  searchForAndSelect(searchTerm) {
    this.searchFor(searchTerm);
    this.selectFromAutocomplete(searchTerm);
  },

  searchFor(searchTerm) {
    I.waitForElement(this.searchBox);
    I.fillField({css: this.searchBox}, searchTerm);
  },

  selectFromAutocomplete(searchTerm) {
    within(this.autoCompleteList, () => {
      I.see(searchTerm.toLowerCase());
      I.click(searchTerm.toLowerCase());
    });
  }
};
