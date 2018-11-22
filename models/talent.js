'use strict';

const helpers = require("../helpers/index")

module.exports = (sequelize, DataTypes) => {
  const Talent = sequelize.define('Talent', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    handphone: DataTypes.STRING,
    social_media: DataTypes.STRING,
    skills: DataTypes.STRING,
    status: DataTypes.STRING,
    price: DataTypes.INTEGER,
    rating: DataTypes.INTEGER,
    photoFile: DataTypes.STRING
  }, {});
  Talent.associate = function(models) {
    // associations can be defined here
    Talent.belongsToMany(models.User, {through: 'Transaction'});
  };
  Talent.beforeCreate((input) =>{
    return input.password = helpers.hashPassword(input.password)
  })
 // instance
 // bisa menggunakan this  
  Talent.prototype.updateRating = function() {
    let sumRating = 0;
    // console.log("masuk ke instance")

    return sequelize.models.Transaction.aggregate("Rating","sum", {where:{TalentId : this.id}})
    .then((subtotal) =>{
      sumRating = subtotal;
      console.log("=======",sumRating)
      return sequelize.models.Transaction.count({
        where:{
          TalentId: this.id
        },
        col: "Rating"
      })
    })
    .then((totalRating) =>{
      console.log("==== totalrat", totalRating)
      if(totalRating > 0){
        this.rating = Math.round(sumRating/ totalRating)
      }
      else{
        this.rating = 0
      }
      return this.save()
      .then(() => console.log("udah save"))
    })
    .catch((err) =>{
      throw new Error(err)
    })
  }

  return Talent;
};