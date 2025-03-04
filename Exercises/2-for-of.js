'use strict';

const sum = (...args) => {
  let total = 0;
  for (const number of args) {
    total += number;
  }
  return total;
};

module.exports = { sum };
