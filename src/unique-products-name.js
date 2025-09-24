const stockProducts = require('./data.json');

const getUniqueProductsName = () => {
  const productsNames = [];

  stockProducts.forEach((product) => {
    const { productName } = product;
    productsNames.push(productName);
  });

  return productsNames;
};

module.exports = { getUniqueProductsName };
