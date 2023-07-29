const mongoose = require("mongoose");

const ordersSchema = new mongoose.Schema({
  products: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Product",
    },
  ],
  totalPrice: {
    type: Number,
    required: true,
  },
  userEmail: {
    type: String,
    required: [true, "Email is required"],
    minLength: [8, "Email must be at least 10 characters long"],
  },
  address: {
    type: String,
    required: [true, "Enter valid shipping address"],
  },
  phoneNumber: {
    type: Number,
    required: [true, "Please enter phone number!"],
  },
  _ownerId: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
});
const Order = mongoose.model("Orders", ordersSchema);

module.exports = Order;
