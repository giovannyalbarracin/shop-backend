import { getClient } from './connection';

export default async function productList() {
 

  return new Promise(async function(resolve, reject) {
    try {
      const db = getClient();
      await db.connect();
      const products = await db.query('select * from product');
      resolve({
        statusCode: 200,
        body: JSON.stringify(products.rows),
      });
    } catch(e) {
      reject({
        statusCode: 500,
        body: "problems retrieving data"
      })
    }
  });
}
