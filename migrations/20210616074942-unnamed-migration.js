'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.addColumn(
      `Todo`,
      `name`,
      {
        type: Sequelize.STRING,
        allowNull: false
      })
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn(`Todo`, `name`)
  }
}
