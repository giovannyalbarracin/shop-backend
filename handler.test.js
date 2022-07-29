const productList = require('./handlers/getProductList');
const productById = require('./handlers/getProductById');
const products = require('./data/products.json')
describe('product api test', () => {
  it('get ProductList working', async() => {
    const productList = await productList();
    expect(productList.body).toBe(JSON.stringify(products));
  });

  it('get Produc by id working', async() => {
    const product = await productById('7567ec4b-b10c-48c5-9345-fc73c48a80aa');
    expect(product.body).toBe(JSON.stringify(products[0]));
  });
})