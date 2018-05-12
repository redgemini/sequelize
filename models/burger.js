//burger.js test
console.log("load burger.js test"); 

module.exports = function (sequelize, DataTypes) {
  var burger = sequelize.define("burger", {
    burger_name: DataTypes.STRING,
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    classMethods: {
      associate: function (models) {
        // associations can be defined here
      }
    }
  });
  return burger;
};
