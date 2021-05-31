const mongoose = require("mongoose");

const Employee = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    position: {
        type: String,
        required: true,
    },
    wage: {
        type: Number,
        required: true,
    },
}, {
    versionKey: false,
});

module.exports = mongoose.model("employee", Employee);