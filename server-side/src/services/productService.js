const Product = require("../models/Product.js");

exports.create = (productData) => Product.create(productData);
exports.getAll = async (ownerId) => {
  let allProducts = Product.find();

  if (ownerId) {
    allProducts = allProducts.find({ _ownerId: ownerId });
  }
  const result = await allProducts;

  return result;
};
exports.getOne = (productId) => Product.findById(productId);
exports.update = (productId, productData) =>
  Product.findByIdAndUpdate(productId, productData);
exports.delete = (productId) => Product.findByIdAndDelete(productId);
