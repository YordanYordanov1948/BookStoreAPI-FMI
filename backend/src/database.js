const mongoose = require('mongoose');
const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI).catch(error => console.error('MongoDB connection error:', error));


module.exports = mongoose;
