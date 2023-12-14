const mongoose = require('./database');
const Author = require('./models/author');
const Order = require('./models/order');
const Book = require('./models/book');

async function populateData() {
    try {
        // Adding sample authors
        const authors = [
            { name: 'Author One', bio: 'Bio of Author One' },
            { name: 'Author Two', bio: 'Bio of Author Two' }
        ];

        await Author.insertMany(authors);

        // Adding sample orders
        const orders = [
            { customerId: 'some-customer-id', totalAmount: 29.99 },
            { customerId: 'another-customer-id', totalAmount: 49.99 }
        ];

            
        await Order.insertMany(orders);
        
        const books = [
            { title: 'Book One', author: 'Author One' },
            { title: 'Book Two', author: 'Author Two' },
        ];

        await Book.insertMany(books);
    

        console.log('Data populated successfully');
    } catch (error) {
        console.error('Error populating data:', error);
    } finally {
        mongoose.connection.close();
    }
}

populateData();
