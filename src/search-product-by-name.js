const stockProducts = require('./data.json');

const searchProductByName = (productName) => {
  if (!productName) return null;

  const foundProduct = stockProducts.find((product) => product.productName === productName);

  if (foundProduct) {
    const formattedPrice = `R$ ${foundProduct.price.toFixed(2)}`;
    return {
      description: foundProduct.description,
      formattedPrice,
    };
  }

  return null;
};

module.exports = { searchProductByName };
