'use strict';

const helpers = require("../helpers/index")

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate:{
        isEmail: true,
        isUnique(value){
          return User.findAll({
           where:{
             email: value
           }
         })
         .then(data => {
           // console.log(" =====> ",data)
           if(data.length !== 0){
           throw new Error(`Email is registered`)
         }})
         .catch(err => { throw new Error (err) })
       }
      }
    },
    password: DataTypes.STRING,
    company_name: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    User.belongsToMany(models.Talent, {through: 'Transaction'});
  };
  User.beforeCreate((input) =>{
    return input.password = helpers.hashPassword(input.password)
  })
  return User;
};