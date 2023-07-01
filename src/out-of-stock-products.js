const stockProducts = require('./data.json');

const getOutOfStockProducts = () => {
  const unavailableProducts = [];

  stockProducts.forEach((product) => {
    if (product.quantityInStock === 0) {
      const { productName } = product;
      unavailableProducts.push(productName);
    }
  });

  return unavailableProducts;
};

module.exports = { getOutOfStockProducts };
