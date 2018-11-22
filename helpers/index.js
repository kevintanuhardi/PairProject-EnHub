const Bcrypt = require("bcryptjs")

function hashPassword(input){
    return Bcrypt.hashSync(input)
}

function checkPassword(input, hashPassword){
    return Bcrypt.compareSync(input, hashPassword)
}

function updateRating(sequelize,transaction,options){
    sequelize.models.Talent.findByPk(transaction.TalentId)
    .then((talent) =>{
        // console.log("===ini talent", talent)
        return talent.updateRating()
    })
    .catch((err) =>{
        console.log(err)
    })
}

module.exports ={
    hashPassword,
    checkPassword,
    updateRating
}