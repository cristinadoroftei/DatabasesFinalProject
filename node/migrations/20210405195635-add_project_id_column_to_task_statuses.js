"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    //https://sequelize.org/master/manual/migrations.html#migration-skeleton
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.addColumn(
          "task_statuses",
          "project_id",
          {
            type: Sequelize.INTEGER,
            allowNull: true,
            references: {
              model: "projects",
              key: "id",
            },
          },
          { transaction: t }
        ),
      ]);
    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.removeColumn("task_statuses", "project_id", {
          transaction: t,
        }),
      ]);
    });
  },
};
