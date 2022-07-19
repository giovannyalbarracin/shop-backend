'use strict';
const getProductList = require('./handlers/getProductList');
const getProductById = require('./handlers/getProductById');

module.exports.getProductList = async (event) => {
  return getProductList();
};



module.exports.getProductById = async (event) => {
  const { productId } = event.pathParameters;
  return getProductById(productId);
};