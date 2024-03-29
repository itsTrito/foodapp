"use strict";

const migrationUtils = require("./common/migration.utils");

module.exports = {
  async up (queryInterface, Sequelize) {
    return migrationUtils.createDatabaseEntity(queryInterface, Sequelize, "ingredients", {
      variation_of_ingredient_id: migrationUtils.foreignKey(Sequelize, "ingredients", true),
      name: {
        type: Sequelize.JSON,
        allowNull: false
      },
      description: {
        type: Sequelize.JSON
      },
      image_path: Sequelize.STRING
    })
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable("ingredients");
  }
};
