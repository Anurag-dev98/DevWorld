const mongoose = require('mongoose')
const validator = require('validator')

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String
    },
    age: {
        type: Number,
        required: true
    },
    emailId: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
        validate: {
            validator: function (value) {
            return validator.isEmail(value);
            }
        },
    },
    password: {
        type: String,
        required: true
    },
    photoUrl: {
        type: String,
        default: "https://conferenceoeh.com/wp-content/uploads/profile-pic-dummy.png"
    }
});

const User = new mongoose.model('User' , userSchema);

module.exports = User