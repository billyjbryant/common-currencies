![Node.js CI](https://github.com/moonshot-partners/common-currencies/workflows/Node.js%20CI/badge.svg)

# Common Currencies
This package provides a list of common currencies with their information, including
symbol, name, code, decinal digits.

The main currency codes object was taken from a gist from [@Fluidbyte](https://github.com/fluidbyte):
https://gist.github.com/Fluidbyte/2973986

## Install
Using npm:
`npm add @moonshot-partners/common-currencies`

Using yarn:
`yarn add @moonshot-partners/common-currencies`

## Usage
There are to exposed structures, one is object based and the other is as a list.

```js
const { currencyCodes, currencies } = require('common-currencies');

console.log(currencyCodes["GBP"]); // {"symbol": "£", "name": "British Pound Sterling" ...}
console.log(currencies[0]); // {"symbol": "£", "name": "British Pound Sterling" ...}
```

## Run tests

Download the repo:
`git clone https://github.com/moonshot-partners/common-currencies.git`

Install dev dependencies
`npm install`

Run tests:
`jest`

