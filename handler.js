import productList from './handlers/getProductList';
import productById from './handlers/getProductById';
const header = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Credentials': true,
};

export const getProductList = async (event) => {
  const products = await productList();
  products.headers = header;
  return products;
};



export const getProductById = async (event) => {
  const { productId } = event.pathParameters;
  const product = await productById(productId);
  product.headers = header;
  return product;
};