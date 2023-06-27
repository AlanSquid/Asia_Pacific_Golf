'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BookingState extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      BookingState.hasMany(models.BookingOrder)
    }
  }
  BookingState.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'BookingState',
    tableName: 'booking_states',
    underscored: true,
  });
  return BookingState;
};