import * as products from '../data/products.json';

export default function productList() {
  return new Promise(function(resolve, reject) {
    resolve({
      statusCode: 200,
      body: JSON.stringify(products),
    });
  });
}
