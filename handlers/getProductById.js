import { getClient } from './connection';
const errorMessage = {
  statusCode: 400,
  body: JSON.stringify({ error: 'id not found' }),
}
export default async function productById(id) {
const db = getClient();
return new Promise(async function(resolve, reject) {
  try {
    await db.connection();
    const product = await db.query(`select * from product where id = ${id}`);
    if (product) {
      resolve({
          statusCode: 200,
          body: JSON.stringify(product.rows[0])
      });
    } else {
      reject(errorMessage);
    }
  } catch(e) {
    reject({
      statusCode: 500,
      body: 'A problem was found retrieving the data'
    });
  } 
});
}