const mongoose = require("mongoose");

require("dotenv/config")

const URI = process.env.DB_CONNECTION_STRING;

const connectDB = async () => {
    await mongoose.connect(URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useFindAndModify: false,
    });
    console.log("db connected");
};

module.exports = connectDB;
