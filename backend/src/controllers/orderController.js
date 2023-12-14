const Order = require('../models/order');

// Create an Order
exports.createOrder = async (req, res) => {
    try {
        const newOrder = new Order(req.body);
        await newOrder.save();
        res.status(201).send(newOrder);
    } catch (err) {
        res.status(500).send({ message: "Error creating order" });
    }
};

// Read all Orders
exports.getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find();
        res.send(orders);
    } catch (err) {
        res.status(500).send({ message: "Error retrieving orders" });
    }
};

// Update an Order
exports.updateOrder = async (req, res) => {
    try {
        const order = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!order) {
            return res.status(404).send({ message: "Order not found" });
        }
        res.send(order);
    } catch (err) {
        res.status(500).send({ message: "Error updating order" });
    }
};

// Delete an Order
exports.deleteOrder = async (req, res) => {
    try {
        const order = await Order.findByIdAndRemove(req.params.id);
        if (!order) {
            return res.status(404).send({ message: "Order not found" });
        }
        res.send({ message: "Order deleted successfully" });
    } catch (err) {
        res.status(500).send({ message: "Error deleting order" });
    }
};


exports.getOrderById = async (req, res) => {
  try {
      const order = await Order.findById(req.params.id);
      if (order) {
          res.send(order);
      } else {
          res.status(404).send({ message: "Order not found" });
      }
  } catch (err) {
      res.status(500).send({ message: "Error retrieving order" });
  }
};