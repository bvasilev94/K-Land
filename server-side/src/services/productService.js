const Product = require("../models/Product.js");

exports.create = (productData) => Product.create(productData);
exports.getAll = async (qs) => {
  let query = Product.find();

  if (qs.where) {
    let [fieldName, ownerId] = qs.where.split("=");
    ownerId = ownerId.replaceAll('"', "");
    query = query.find({ _ownerId: ownerId });
  }
  const result = await query;

  return result;
};
exports.getOne = (productId) => Product.findById(productId);
exports.update = (productId, productData) =>
  Product.findByIdAndUpdate(productId, productData);
exports.delete = (productId) => Product.findByIdAndDelete(productId);
