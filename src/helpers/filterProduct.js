const listOfProducts = require('../../products.json');

/**
 * Helper method
 *
 * @description Find product based on productId
 * @param {*} productId
 *
 */

exports.filterProduct= function(productId) {
  return listOfProducts.filter((item) =>
    item.upc === productId);
};
