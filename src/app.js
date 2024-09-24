const express = require('express');
const app = express();
const connectDB = require('../constants/db_connection')
const User = require('../models/user')
PORT = 7777;

connectDB();

app.post('/user' , async (req,res)=>{
    const user = new User({
        Name: "Anurag",
        age: 21,
    })
    await user.save()

    res.send("User sent")
})

app.listen(PORT);