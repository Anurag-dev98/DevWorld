const mongoose = require('mongoose')

const connectDB = async () =>{
    await mongoose.connect('mongodb://127.0.0.1:27017/Namaste')
    console.log("DB Connected successfully")
}

module.exports = connectDB


/*

const ALLOWED_UPDATES = [
    "userId",
    "photoUrl",
    "about",
    "gender",
    "age",
    "skills",
]

const isUpdateAllowed = Object.keys(data).every((k) => {
        ALLOWED_UPDATES.include(k);
});

if(!isUpdateAllowed) {
    throw new Error("Update not allowed");
};


*/