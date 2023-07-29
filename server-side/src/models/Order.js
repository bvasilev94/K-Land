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
    required: true
  },
  address: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: Number,
    required: true
  },
  _ownerId: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
});
const Order = mongoose.model("Orders", ordersSchema);

module.exports = Order;
