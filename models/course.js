'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Course.hasMany(models.BookingOrder)
      Course.hasMany(models.CheckOrder)
      Course.hasMany(models.Detail)
    }
  }
  Course.init({
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    lastPaid: DataTypes.INTEGER,
    balance: DataTypes.INTEGER,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Course',
    tableName: 'coursies',
    underscored: true,
  });
  return Course;
};