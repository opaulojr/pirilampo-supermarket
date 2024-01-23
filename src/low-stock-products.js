const stockProducts = require('./data.json');

const getLowStockProducts = () => {
  const lowStockProducts = [];

  stockProducts.forEach((product) => {
    if (product.quantityInStock === 1) {
      const lowStockProduct = `${product.productName}: ${product.quantityInStock} unit`;
      lowStockProducts.push(lowStockProduct);
    }
    if (product.quantityInStock > 1 && product.quantityInStock <= 10) {
      const lowStockProduct = `${product.productName}: ${product.quantityInStock} units`;
      lowStockProducts.push(lowStockProduct);
    }
  });

  return lowStockProducts;
};

module.exports = { getLowStockProducts };
