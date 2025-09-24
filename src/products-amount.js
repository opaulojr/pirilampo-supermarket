const stockProducts = require('./data.json');

const getProductsAmount = () => {
  let totalAmount = 0;

  for (let i = 0; i < stockProducts.length; i += 1) {
    totalAmount += stockProducts[i].quantityInStock;
  }

  return totalAmount;
};

module.exports = { getProductsAmount };
