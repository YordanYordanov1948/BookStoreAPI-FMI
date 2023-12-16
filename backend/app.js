require('dotenv').config();
console.log(process.env.MONGODB_URI);
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('./src/database');
const authorRoutes = require('./src/routes/authorRoutes');
const bookRoutes = require('./src/routes/bookRoutes');
const orderRoutes = require('./src/routes/orderRoutes');

// Create an instance of express
const app = express();

// Use middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Define a simple root route
app.get('/', (req, res) => {
  res.json({ message: "Welcome to the Book Store API." });
});

// Use routes for different resources
app.use('/books', bookRoutes);
app.use('/authors', authorRoutes);
app.use('/orders', orderRoutes);

// Set the port
const PORT = process.env.PORT || 3001;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

app.use(cors({ origin: 'http://localhost:3000' }));


module.exports = app;
