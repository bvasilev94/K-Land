const Order = require('../models/Order.js');

exports.create = (orderData) => Order.create(orderData);
exports.getAllFromUser = (userId) => Order.find({_ownerId: userId})