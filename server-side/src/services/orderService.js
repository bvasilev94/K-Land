const Order = require('../models/Order.js');

exports.create = (orderData) => Order.create(orderData);
