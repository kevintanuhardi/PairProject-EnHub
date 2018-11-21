const Bcrypt = require("bcryptjs")

function hashPassword(input){
    return Bcrypt.hashSync(input)
}

module.exports ={
    hashPassword
}