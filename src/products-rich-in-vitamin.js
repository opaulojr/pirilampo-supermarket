const stockProducts = require('./data.json');

const getProductsRichInVitamin = () => {
  const productsWithVitamins = [];

  for (let i = 0; i < stockProducts.length; i += 1) {
    const product = stockProducts[i];

    if (product.nutritionalInfo.vitamins) {
      const vitamins = Object.entries(product.nutritionalInfo.vitamins)
        .map(([vitamin, quantity]) => `${vitamin}: ${quantity}`);

      productsWithVitamins.push({
        description: product.description,
        formattedPrice: `R$ ${product.price.toFixed(2)}`,
        vitaminsInformation: vitamins,
      });
    }
  }

  return productsWithVitamins;
};

module.exports = { getProductsRichInVitamin };
