'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Pessoas', [
        {
        nome: 'Ana Souza',
        ativo: true,
        email: 'anasouza@ana.com',
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date()
      },
        {
        nome: 'Gilberto',
        ativo: true,
        email: 'gilberto@gilberto.com',
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date()
      },
        {
        nome: 'Erik',
        ativo: true,
        email: 'erik@erik.com',
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date()
      },
        {
        nome: 'Lucas',
        ativo: true,
        email: 'lucas@lucas.com',
        role: 'docente',
        createdAt: new Date(),
        updatedAt: new Date()
      },
        {
        nome: 'Maria',
        ativo: true,
        email: 'maria@maria.com',
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date()
      },
        {
        nome: 'Lazraro',
        ativo: true,
        email: 'lazaro@lazaro.com',
        role: 'docente',
        createdAt: new Date(),
        updatedAt: new Date()
      },

  ], {});

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Pessoas', null, {});

  }
};
