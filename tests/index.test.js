const { currencyCodes, currencies } = require('../index.js');

const GBP = {
  "symbol": "£",
  "name": "British Pound Sterling",
  "symbol_native": "£",
  "decimal_digits": 2,
  "rounding": 0,
  "code": "GBP",
  "name_plural": "British pounds sterling"
};

test('returns currency codes as object', () => {
  expect(currencyCodes["GBP"]).toEqual(GBP);
});

test('returns currencies as list', () => {
  expect(currencies[0]).toEqual(GBP);
});

test('currency list returns main currencies first', () => {
  const topCurrencies = currencies.slice(0, 3).map(c => c.code);
  expect(topCurrencies).toEqual(["GBP", "EUR", "USD"]);
});
