const listOfProducts = require('../../products.json');
exports.filterProduct= function(productId) {
  return listOfProducts.filter((item) =>
    item.upc === productId);
};
