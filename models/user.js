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
      User.belongsTo(models.Class)
    }
  }
  User.init({
    member_id: DataTypes.STRING,
    name: DataTypes.STRING,
    account: DataTypes.STRING,
    isMale: DataTypes.BOOLEAN,
    team: DataTypes.STRING,
    balance: DataTypes.INTEGER,
    point: DataTypes.INTEGER,
    gift: DataTypes.INTEGER,
    member_since: DataTypes.DATE,
    member_expire: DataTypes.DATE,
    text: DataTypes.STRING,
    isAdmin: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};