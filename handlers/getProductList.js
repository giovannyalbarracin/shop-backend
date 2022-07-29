import { getClient } from './connection';

export default async function productList() {
  const db = getClient();
  await db.connect();

  return new Promise(async function(resolve, reject) {
    try {
      const products = await db.query('select * from product');
      resolve({
        statusCode: 200,
        body: JSON.stringify(products),
      });
    } catch(e) {
      reject({
        statusCode: 500,
        body: "problem retrieving data"
      })
    }
  });
}
