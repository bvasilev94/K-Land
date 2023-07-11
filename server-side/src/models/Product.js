const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  make: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
  },
  _ownerId: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
});
const Product = mongoose.model("Products", productSchema);

module.exports = Product;
