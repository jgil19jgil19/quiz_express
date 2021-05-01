'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Quizzes', [
      {
        question: 'Capital de Italia',
        answer: 'Roma',
        //authorId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
	   {
        question: 'Capital de Francia',
        answer: 'París',
        //authorId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
	  {
        question: 'Capital de España',
        answer: 'Madrid',
        //authorId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },     
      
      {
        question: 'Capital de Portugal',
        answer: 'Lisboa',
        //authorId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Quizzes', null, {});
  }
};
