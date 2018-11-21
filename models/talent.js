'use strict';
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
    rating: DataTypes.INTEGER
  }, {});
  Talent.associate = function(models) {
    // associations can be defined here
    Talent.belongsToMany(models.User, {through: 'Transaction'});
  };
  return Talent;
};