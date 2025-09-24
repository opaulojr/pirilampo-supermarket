const stockProducts = require('./data.json');

const getProductsWithAllergyOrIntolerance = () => (
  stockProducts.filter((product) => {
    if ('allergyOrIntolerance' in product) {
      return product;
    }
    return false;
  }).map((product) => ({
    description: product.description,
    formattedPrice: `R$ ${product.price.toFixed(2)}`,
    allergyOrIntoleranceMessage: `Pode conter: ${product.allergyOrIntolerance}`,
  }))
);

module.exports = { getProductsWithAllergyOrIntolerance };
