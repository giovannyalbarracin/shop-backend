const products = require('../data/products.json');

 async function getProductList() {

  return {
    statusCode: 200,
    body: JSON.stringify(products),
  }
}

module.exports = getProductList;