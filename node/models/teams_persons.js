const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('teams_persons', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    person_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'persons',
        key: 'id'
      }
    },
    team_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'teams',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'teams_persons',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
          { name: "person_id" },
          { name: "team_id" },
        ]
      },
      {
        name: "FKTeams_Pers284365",
        using: "BTREE",
        fields: [
          { name: "person_id" },
        ]
      },
      {
        name: "FKTeams_Pers321748",
        using: "BTREE",
        fields: [
          { name: "team_id" },
        ]
      },
    ]
  });
};
