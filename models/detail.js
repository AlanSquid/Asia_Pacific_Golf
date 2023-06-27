'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Detail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Detail.belongsTo(models.User)
      Detail.belongsTo(models.Course)
    }
  }
  Detail.init({
    item: DataTypes.STRING,
    date: DataTypes.DATEONLY,
    team: DataTypes.STRING,
    value: DataTypes.INTEGER,
    total: DataTypes.INTEGER,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Detail',
    tableName: 'details',
    underscored: true
  });
  return Detail;
};