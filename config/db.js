const mongoose = require('mongoose')

const connectDB = async() =>{
    try {
        const conn = mongoose.connect(process.env.MONGO_URI);

        console.log(`MongoDB Connected`);
    } catch (error) {
        console.log(`Error: ${error.message}`.red);
        process.exit(1);
    }
}

module.exports = connectDB;