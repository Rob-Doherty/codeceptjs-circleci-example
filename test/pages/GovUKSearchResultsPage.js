
'use strict';

let I;
module.exports = {

  _init() {
    I = actor();
  },

  // locators
  searchResultTitle: 'li div.gem-c-document-list__item-title',

  // methods
  selectResult(result) {
    I.waitForText(result);
    I.click(result, this.searchResultTitle);
  }
};
