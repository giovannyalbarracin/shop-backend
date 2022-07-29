import { getClient } from './connection';

export default async function createProduct(productInfo) {
const db = getClient();
return new Promise(async function(resolve, reject) {
  try {
    await db.connection();
    const product = await db.query(`INSERT INTO product(description, price, title) 
                                VALUES(${productInfo.description}, ${productInfo.price}, ${productInfo.title}) 
                                RETURNING *'`);
      resolve({
          statusCode: 200,
          body: JSON.stringify(product.rows[0])
      });
  } catch(e) {
    reject({
      statusCode: 500,
      body: 'A problem was found creating the product'
    });
  } 
});
}