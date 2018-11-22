'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("Talents","photoFile",{type: Sequelize.STRING});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("Talents", "photoFile");
  }
};
