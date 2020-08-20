const { currencyCodes } = require('./currencies.js');

module.exports = {
  currencyCodes,
  currencies: Object.values(currencyCodes),
};
