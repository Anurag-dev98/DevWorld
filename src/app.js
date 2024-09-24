const express = require('express');
const app = express();
const connectDB = require('../constants/db_connection')
const User = require('../models/user')
PORT = 7777;

app.use(express.json())

connectDB();

app.post('/user' , async (req,res)=>{
    // const {firstName , lastName, age, emailId, password} = req.body;

    // const user = new User({
    //     firstName: firstName,
    //     lastName: lastName,
    //     age: age,
    //     emailId: emailId,
    //     password: password,
    // })


    const user = new User({
        firstName: "Anurag",
        lastName: "Singh",
        age: 18,
        emailId: "anuragsingh@gmail.com",
        password: "1j2io1wjdjsjdisidwkd",

    })
    await user.save()

    res.send("User sent")
})

app.listen(PORT);