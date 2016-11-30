'use strict';
module.exports = function(sequelize, DataTypes) {
  var Challenge = sequelize.define('Challenge', {
    name: DataTypes.STRING,
    active: DataTypes.BOOLEAN,
    pot: DataTypes.INTEGER,
    numberOfDays: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        this.hasMany(models.User);
        this.hasMany(models.Task);

      }
    }
  });
  return Challenge;
};
