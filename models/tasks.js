'use strict';
const {
  Model
} = require('sequelize');
const users = require('./users');
module.exports = (sequelize, DataTypes) => {
  class Tasks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Tasks.init({
    task: DataTypes.STRING,
    deadline: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    status:DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Tasks',
  });

  return Tasks;
};  