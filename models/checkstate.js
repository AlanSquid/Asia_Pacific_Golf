'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CheckState extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      CheckState.hasMany(models.CheckOrder)
    }
  }
  CheckState.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'CheckState',
    tableName: 'check_states',
    underscored: true,
  });
  return CheckState;
};