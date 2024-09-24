const validator = require('validator')

function UserValidator(req){
    if(!validator.isEmail(`${req.emailId}`)){
        return "Please enter a valid email"
    } else if(!validator.isStrongPassword(`${req.password}`)){
        return "Please Enter a Strong Password"
    } else{
        return "Account Created Successfully"
    }
}

module.exports = { UserValidator }