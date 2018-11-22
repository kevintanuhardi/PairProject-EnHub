'use strict';

const bcrypt = require("bcryptjs")

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Talents', [
        {
          name: 'Laurentia Alda',
          email: "laurentAlda@gmail.com",
          password: bcrypt.hashSync("alda"),
          handphone: "08678678",
          social_media: "@laurent",
          skills: "Photoshop,Web-design,Illustrator,Social-media-handling",
          status: "available",
          price: 1000000,
          createdAt: new Date(),
          updatedAt: new Date()
          },
          {
          name: "Viola Ola",
          email: "ola_pollar@gmail.com",
          password: bcrypt.hashSync("ola"),
          handphone: "09867897567",
          social_media: "@viola_ola",
          skills: "Photoshop,Illustrator,Social-media-handling",
          status: "available",
          price: 1000000,
          createdAt: new Date(),
          updatedAt: new Date()
          },
          {
          name: 'Sella',
          email: "sellaaaa@gmail.com",
          password: bcrypt.hashSync("sella"),
          handphone: "0899754567",
          social_media: "@sellaa_05",
          skills: "Photoshop,Web-design,Illustrator,Social-media-handling",
          status: "available",
          price: 1000000,
          createdAt: new Date(),
          updatedAt: new Date()
          },
          {
          name: 'Benedikta Elisa',
          email: "lisa_lisaaa@gmail.com",
          password: bcrypt.hashSync("lisa"),
          handphone: "08908687576",
          social_media: "@elisa_lisa",
          skills: "Photoshop,Web-design,Illustrator,Social-media-handling",
          status: "available",
          price: 1000000,
          createdAt: new Date(),
          updatedAt: new Date()
          },
          {
          name: 'Aloysius Baskoro',
          email: "sellaaaa@gmail.com",
          password: bcrypt.hashSync("rino"),
          handphone: "0890868756",
          social_media: "@aloysius_rinoadi",
          skills: "Photoshop,Web-design,Illustrator,Social-media-handling",
          status: "available",
          price: 1000000,
          createdAt: new Date(),
          updatedAt: new Date()
          },
          {
          name: 'Tiara Iskandar',
          email: "marutabak@gmail.com",
          password: bcrypt.hashSync("tiara"),
          handphone: "089775764",
          social_media: "@guemaru",
          skills: "Photoshop,Web-design,Illustrator,Social-media-handling",
          status: "available",
          price: 1000000,
          createdAt: new Date(),
          updatedAt: new Date()
          },
          {
          name: 'David Juniar Adipoetro',
          email: "sellaaaa@gmail.com",
          password: bcrypt.hashSync("david"),
          handphone: "0899754567",
          social_media: "@davdjuniar",
          skills: "Photoshop,Web-design,Illustrator,Social-media-handling",
          status: "available",
          price: 1000000,
          createdAt: new Date(),
          updatedAt: new Date()
          },
          {
          name: 'Ivan Ryandi',
          email: "chenlong@gmail.com",
          password: bcrypt.hashSync("ivan"),
          handphone: "089086864",
          social_media: "@ivan_ryandi",
          skills: "Photoshop,Web-design,Illustrator,Social-media-handling",
          status: "available",
          price: 1000000,
          createdAt: new Date(),
          updatedAt: new Date()
          },
          {
          name: 'Alya Gentiana',
          email: "sellaaaa@gmail.com",
          password: bcrypt.hashSync("alya"),
          handphone: "089868764",
          social_media: "@algenz",
          skills: "Photoshop,Web-design,Illustrator,Social-media-handling",
          status: "available",
          price: 1000000,
          createdAt: new Date(),
          updatedAt: new Date()
          },
          {
          name: 'Nabila Aqmar',
          email: "sellaaaa@gmail.com",
          password: bcrypt.hashSync("abil"),
          handphone: "089086875",
          social_media: "@nabilaqmr",
          skills: "Photoshop,Web-design,Illustrator,Social-media-handling",
          status: "available",
          price: 1000000,
          createdAt: new Date(),
          updatedAt: new Date()
          },
          {
          name: 'Nabila Dewa',
          email: "nabila@gmail.com",
          password: bcrypt.hashSync("nabil"),
          handphone: "089086875",
          social_media: "@nabiladew",
          skills: "Photoshop,Web-design,Illustrator,Social-media-handling",
          status: "available",
          price: 1560000,
          createdAt: new Date(),
          updatedAt: new Date()
          }
    ], {});
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Talents', null, {});
  }
};
