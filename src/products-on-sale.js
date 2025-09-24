const stockProducts = require('./data.json');

const getProductsOnSale = () => (
  stockProducts.filter((product) => product.onSale === true)
    .map((product) => ({
      description: product.description,
      formattedPrice: `R$ ${product.price.toFixed(2)}`,
      onSale: product.onSale,
    }))
);

module.exports = { getProductsOnSale };
