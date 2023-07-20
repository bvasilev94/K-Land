const Product = require("../models/Product.js");

exports.create = (productData) => Product.create(productData);
exports.getAll = async (ownerId,qsLimit) => {
  let allProducts = Product.find();

  if (ownerId) {
    allProducts = allProducts.find({ _ownerId: ownerId });
  }

  if(qsLimit){
    console.log(qsLimit);
    allProducts = allProducts.find().sort({_id: -1}).limit(qsLimit)
  }
  const result = await allProducts;

  return result;
};
exports.getOne = (productId) => Product.findById(productId);
exports.update = (productId, productData) =>
  Product.findByIdAndUpdate(productId, productData);
exports.delete = (productId) => Product.findByIdAndDelete(productId);
