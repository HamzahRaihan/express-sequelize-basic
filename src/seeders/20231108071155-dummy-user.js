'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    return queryInterface.bulkInsert('Users', [
      {
        name: 'Hamzah Raihan',
        email: 'hamzah@gmail.com',
        password: '123',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Noer Ishaq',
        email: 'xanabawi@gmail.com',
        password: '345',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Roojax Jackson',
        email: 'jacky@gmail.com',
        password: '9123',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  },
};
