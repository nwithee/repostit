const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

//Create the User Model
class Test extends Model {
}

// Create fields for User model
Test.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    test: {
      type: DataTypes.STRING,
      allowNull: false
    }

  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user'
  }
);

module.exports = Test;