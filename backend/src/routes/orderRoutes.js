const express = require('express');
const orderController = require('../controllers/orderController');
const router = express.Router();

// Create a new order
router.post('/', orderController.createOrder);

// Retrieve all orders
router.get('/', orderController.getAllOrders);

// Retrieve a single order with orderId
router.get('/:id', orderController.getOrderById);

// Update an order with orderId
router.put('/:id', orderController.updateOrder);

// Delete an order with orderId
router.delete('/:id', orderController.deleteOrder);

module.exports = router;
