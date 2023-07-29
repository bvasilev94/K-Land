const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  category: {
    type: String,
    required: [true, "Please choose a category!"],
  },
  name: {
    type: String,
    required: true,
    minLength: [
      2,
      "Please enter a valid name between 2 and 50 characters long!",
    ],
    maxLength: [
      50,
      "Please enter a valid manufacturer between 2 and 50 characters long!",
    ],
  },
  manufacturer: {
    type: String,
    required: true,
    minLength: [
      2,
      "Please enter a valid manufacturer between 2 and 10 characters long!",
    ],
    maxLength: [
      10,
      "Please enter a valid manufacturer between 2 and 10 characters long!",
    ],
  },
  price: {
    type: Number,
    required: [true, "Please enter valid price!"],
    min: [1, "Please enter a valid year!"],
    max: [10000, "Please enter a valid year!"],
  },
  year: {
    type: Number,
    required: [true, "Please enter year!"],
    min: [1900, "Please enter a valid year!"],
    max: [2023, "Please enter a valid year!"],
  },
  description: {
    type: String,
    required: [true, "Description is required!"],
    minLength: [
      5,
      "Please enter a valid description between 5 and 50 characters long!",
    ],
  },
  imageUrl: {
    type: String,
    required: [true, "Image url is required!"],
    match: [/^https?:\/\//, "Please enter valid url!"],
  },
  _ownerId: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
});
const Product = mongoose.model("Products", productSchema);

module.exports = Product;
