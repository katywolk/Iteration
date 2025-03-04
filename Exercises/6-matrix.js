'use strict';

const max = (matrix) => {
  let maxValue = -Infinity;

  const findMax = (arr) => {
    for (const el of arr) {
      if (Array.isArray(el)) {
        findMax(el);
      } else {
        maxValue = Math.max(maxValue, el);
      }
    }
  };

  findMax(matrix);
  return maxValue;
};


module.exports = { max };
