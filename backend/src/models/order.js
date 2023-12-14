const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    customerId: String,
    orderDate: {
        type: Date,
        default: Date.now
    },
    totalAmount: Number,
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
