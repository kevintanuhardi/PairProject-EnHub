'use strict';

module.exports = (sequelize, DataTypes) => {
  const helpers = require("../helpers")
  const Transaction = sequelize.define('Transaction', {
    id:{
      type:DataTypes.INTEGER,
      autoIncrement:true,
      primaryKey:true
    },
    UserId: DataTypes.INTEGER,
    TalentId: DataTypes.INTEGER,
    Rating: DataTypes.INTEGER
  }, {});
  Transaction.associate = function(models) {
    // associations can be defined here
    Transaction.belongsTo(models.Talent)
    Transaction.belongsTo(models.User)
  };

  Transaction.afterSave((transaction,option) =>{
    // console.log("========", transaction)
    return helpers.updateRating(sequelize, transaction, option)
  })
  return Transaction;
};