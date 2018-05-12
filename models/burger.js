//burger.js test
console.log("load burger.js test"); 

// burger_name attribute 
// devoured attribute = false

module.exports = function (sequelize, DataTypes) {
  var Burger = sequelize.define("burger", {
    burger_name: DataTypes.STRING,
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    classMethods: {
      associate: function (models) {
      
      }
    }
  });
  return burger;
};
