const bcrypt = require('bcrypt');
const saltRounds = 10;

async function passwordHash(password){
    try {
        const hashPass = await bcrypt.hash(password, saltRounds);
        return hashPass;
    } catch (error) {
        throw error;
    }
}

async function passwordCmp(password, hashedPassword) {
        const isPasswordValid = await bcrypt.compare(password, hashedPassword);
        return isPasswordValid
}

module.exports = { passwordHash, passwordCmp }