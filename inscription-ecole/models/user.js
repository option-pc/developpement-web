'use strict';
module.exports = (sequelize, DataTypes) => {
  var user = sequelize.define('user', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: DataTypes.STRING,
    address: DataTypes.STRING,
    birthday: DataTypes.DATE,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
  }, {});
  user.associate = function(models) {
      user.belongsToMany(models.formation, {through: 'UserFormation'});
  };
  return user;
};