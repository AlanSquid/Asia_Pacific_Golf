'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CheckOrder extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      CheckOrder.belongsTo(models.User)
      CheckOrder.belongsTo(models.Course)
      CheckOrder.belongsTo(models.CheckState)
    }
  }
  CheckOrder.init({
    gameBegin: DataTypes.DATE,
    team: DataTypes.STRING,
    group: DataTypes.INTEGER,
    checkList: DataTypes.STRING,
    stateDescription: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'CheckOrder',
    tableName: 'check_orders',
    underscored: true,
  });
  return CheckOrder;
};