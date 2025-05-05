
'use strict';

let I;

module.exports = {

  _init() {
    I = actor();
  },

  // locators
  mojLogo: 'div.brand--ministry-of-justice',

  // methods
  onLandingPage() {
    I.seeElement(this.mojLogo);
    I.seeInCurrentUrl('organisations/ministry-of-justice');
  }
};
