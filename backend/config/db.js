const mongoose = require('mongoose')

const MONGO_URI = process.env.MONGO_URI || 'mongodb://0.0.0.0:27017/project';

const connectDb = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log('MongoDB connected successfully.');
    } catch (err) {
        console.log('Error connecting to Db', err.message)
    }
}

module.exports =  connectDb;