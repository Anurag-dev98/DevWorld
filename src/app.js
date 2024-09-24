const express = require('express');
const app = express();
const connectDB = require('../constants/db_connection');
const User = require('../models/user');
const { UserValidator } = require('../utils/userValidator');
const { passwordHash, passwordCmp } = require('../middlewares/encryption')
PORT = 7777;

app.use(express.json());
connectDB();

app.post('/signup' , async (req,res)=>{
    try{
    // body sanitization works here
    const alpha = UserValidator(req.body)
    if(alpha == "Account Created Successfully"){
    const {firstName, lastName, age, emailId, password, photoUrl} = req.body;

    // encrypting occurs here :
    const hashPass = await passwordHash(password);
    // the db schema is here 
    const user = new User({
        firstName,
        lastName,
        age,
        emailId,
        password: hashPass,
        photoUrl
    });
    await user.save();

    res.send(alpha)
    } else {
        return res.send(alpha)
    }
    } catch(err){
        res.status(400).send("Error" + err.message)
    }
});

app.post('/login', async (req,res)=>{

    try{
        const beta = UserValidator(req.body);
        if(beta == "Account Created Successfully"){
            const {emailId, password} = req.body;
            const userData = await User.find({emailId : emailId}).exec();

            if(!userData){
                res.send("Invalid Credentials")
            } else{
                // res.send("User Found : " + userData[0].password)
                const zeta = await passwordCmp(password, userData[0].password)
                if(zeta == true){
                    res.send("Log in successful")
                } else {
                    res.send("Invalid Credentials")
                }
            }
        } else{
            res.send("Invalid Credentials")
        }

    } catch(err){
        res.send(err)
    }
})


app.listen(PORT);