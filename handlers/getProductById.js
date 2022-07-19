const products = require('../data/products.json');
const errorMessage = {
  statusCode: 400,
  body: JSON.stringify({ error: 'id not found' }),
}
async function getProductById(id) {
 const product = products.find(prod => prod.id === id);

 if (product) {
    return {
      statusCode: 200,
      body: JSON.stringify(product)
    }
  }
  return errorMessage;
}

module.exports = getProductById;