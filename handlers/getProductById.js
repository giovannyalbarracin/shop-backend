import * as products from '../data/products.json';
const errorMessage = {
  statusCode: 400,
  body: JSON.stringify({ error: 'id not found' }),
}
export default function productById(id) {
const product = products.find(prod => prod.id === id);
return new Promise(function(resolve, reject) {
  if (product) {
    resolve({
        statusCode: 200,
        body: JSON.stringify(product)
    });
  } else {
    reject(errorMessage);
  }
});
}