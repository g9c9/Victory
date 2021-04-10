const mongoose = require('mongoose');
require('dotenv/config');
const db = process.env.DB_CONNECTION;

const connectDB = async () => {
    try {
        await mongoose.connect(
            db,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            }
        );

        console.log('MongoDB is Connected...');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;