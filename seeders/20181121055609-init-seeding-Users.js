'use strict';
const bcrypt = require("bcryptjs")

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
      name: 'Kevin Tanuhardi',
      email: "kevin.tanuhardi@gmail.com",
      password: bcrypt.hashSync("kevin"),
      company_name : "Portair",
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      name: 'Robert Arifin',
      email: "robert@gmail.com",
      password: bcrypt.hashSync("robert"),
      company_name: "Tokopedia",
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      name: 'Treya Anggabaya',
      email: "treya@gmail.com",
      password: bcrypt.hashSync("treya"),
      company_name: "Hack",
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      name: 'Arnold Herod',
      email: "arnold@gmail.com",
      password: bcrypt.hashSync("arnold"),
      company_name: "Arnoults",
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      name: 'Januar Smad',
      email: "januar@gmail.com",
      password: bcrypt.hashSync("januar"),
      company_name: "Warung Kongkow",
      createdAt: new Date(),
      updatedAt: new Date()
      },
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
