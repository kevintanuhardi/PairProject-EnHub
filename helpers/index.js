const Bcrypt = require("bcryptjs")

function hashPassword(input){
    return Bcrypt.hashSync(input)
}

function checkPassword(input, hashPassword){
    return Bcrypt.compareSync(input, hashPassword)
}

module.exports ={
    hashPassword,
    checkPassword
}