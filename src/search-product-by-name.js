const stockProducts = require('./data.json');

const normalizeString = (string) => string
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')
  .toLowerCase();

const searchProductByName = (name) => {
  if (!name) return null;

  const normalizedName = normalizeString(name);

  const foundProducts = stockProducts.filter((product) => {
    const normalizedProductName = normalizeString(product.productName);
    return normalizedProductName.includes(normalizedName);
  });

  if (foundProducts.length === 0) return null;

  const formattedProducts = foundProducts.map((product) => {
    const formattedPrice = `R$ ${product.price.toFixed(2)}`;
    return {
      description: product.description,
      formattedPrice,
    };
  });

  return formattedProducts;
};

module.exports = { searchProductByName };
