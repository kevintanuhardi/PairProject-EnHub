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
  return Talent;
};