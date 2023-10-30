const mongoose = require('mongoose');
const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/booksAPI', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Error connecting to MongoDB: ', error);
  }
};


module.exports = connectDB;