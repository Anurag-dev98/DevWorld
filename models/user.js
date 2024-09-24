const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    }
});

const User = new mongoose.model('User' , userSchema);

module.exports = User