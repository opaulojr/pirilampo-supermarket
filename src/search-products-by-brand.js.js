const stockProducts = require('./data.json');

const normalizeString = (string) => string
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')
  .toLowerCase();

const searchProductsByBrand = (brand) => {
  if (!brand) return [];

  const normalizedBrand = normalizeString(brand);

  const foundProducts = stockProducts.filter((product) => {
    const normalizedProductBrand = normalizeString(product.brand);
    return normalizedProductBrand.includes(normalizedBrand);
  });

  if (foundProducts.length === 0) return [];

  const formattedProducts = foundProducts.map((product) => {
    const formattedPrice = `R$ ${product.price.toFixed(2)}`;
    return {
      description: product.description,
      formattedPrice,
    };
  });

  return formattedProducts;
};

module.exports = { searchProductsByBrand };
