const stockProducts = require('./data.json');

const getUniqueProductsAmount = () => {
  let count = 0;

  stockProducts.forEach((product) => {
    if (typeof product === 'object') count += 1;
  });

  return count;
};

module.exports = { getUniqueProductsAmount };
