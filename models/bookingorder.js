'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BookingOrder extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      BookingOrder.belongsTo(models.User)
      BookingOrder.belongsTo(models.Course)
      BookingOrder.belongsTo(models.BookingState)
    }
  }
  BookingOrder.init({
    date: DataTypes.DATEONLY,
    gameBeginStart: DataTypes.DATE,
    gameBeginEnd: DataTypes.DATE,
    team: DataTypes.STRING,
    group: DataTypes.INTEGER,
    bookingList: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'BookingOrder',
    tableName: 'booking_orders',
    underscored: true,
  });
  return BookingOrder;
};