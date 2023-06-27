'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.BookingOrder)
      User.hasMany(models.CheckOrder)
      User.hasMany(models.Detail)
    }
  }
  User.init({
    memberId: DataTypes.STRING,
    name: DataTypes.STRING,
    account: DataTypes.STRING,
    gender: DataTypes.BOOLEAN,
    phone: DataTypes.STRING,
    address: DataTypes.STRING,
    personId: DataTypes.STRING,
    passportNum: DataTypes.STRING,
    salesRep: DataTypes.STRING,
    point: DataTypes.STRING,
    gift: DataTypes.STRING,
    memberSince: DataTypes.DATEONLY,
    memberExpire: DataTypes.DATEONLY,
    membership: DataTypes.STRING,
    description: DataTypes.STRING,
    isAdmin: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users',
    underscored: true
  });
  return User;
};