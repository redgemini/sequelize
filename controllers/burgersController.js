//burgerController test
console.log("load burgerController.js test"); 

var express = require("express");

var router = express.Router();
// edit burger model to match sequelize
var db = require("../models/");

// get route -> index
router.get("/", function (req, res) {
  // send us to the next get function instead.
  res.redirect("/burgers");
});

// get route, edited to match sequelize
router.get("/burgers", function (req, res) {
  // replace old function with sequelize function
  db.Burger.findAll()
    // use promise method to pass the burgers...
    .then(function (dbburger) {
      console.log(dbburger);
      // into the main index, updating the page
      var hbsObject = {
        burger: dbburger
      };
      return res.render("index", hbsObject);
    });
});

// post route to create burgers
router.post("/burgers/create", function (req, res) {
  // edited burger create to add in a burger_name
  db.burger.create({
      burger_name: req.body.burger_name
    })
    // pass the result of our call
    .then(function (dbburger) {
      // log the result to our terminal/bash window
      console.log(dbburger);
      // redirect
      res.redirect("/");
    });
});

// put route to devour a burger
router.put("/burgers/update/:id", function (req, res) {
  // update one of the burgers
  db.burger.update({
    devoured: true
  }, {
    where: {
      id: req.params.id
    }
  }).then(function (dbburger) {
    res.json("/");
  });
});

module.exports = router;
