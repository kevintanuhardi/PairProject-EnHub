'use strict';

const bcrypt = require("bcryptjs")

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Talents', [
      {
      name: 'Ifan Supandi',
      email: "ifan@gmail.com",
      password: bcrypt.hashSync("ifan"),
      handphone: "08111111111",
      social_media: "@ifangans",
      skills: "Photoshop,Web-design,Illustrator",
      status: "available",
      price: 500000,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      name: 'Valerie Tandri',
      email: "valerie@gmail.com",
      password: bcrypt.hashSync("valerie"),
      handphone: "08111111112",
      social_media: "@valcans",
      skills: "Photoshop,Illustrator",
      status: "available",
      price: 750000,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      name: 'Kevin Kurniawan',
      email: "kevinkv@gmail.com",
      password: bcrypt.hashSync("kevin"),
      handphone: "08111111113",
      social_media: "@kevinkv",
      skills: "Photoshop,Web-design,Illustrator,Social-media-handling",
      status: "available",
      price: 1000000,
      createdAt: new Date(),
      updatedAt: new Date()
      }
  ], {});
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Talents', null, {});
  }
};
