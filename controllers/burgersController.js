//burgerController test
console.log("load BurgerController.js test"); 

//routers go here

var express = require("express");
var router = express.Router();

//Import burger.js to use db
var burger = require("../models/burger.js");

// create routes
router.get("/", function(req, res) {
  res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {
    
  // express callback response by calling burger.selectAllBurger
  burger.all(function(burgerData) {

    //MySQL query callback will return burger_data
    res.render("index", { burger_data: burgerData });

  });
});

// post route 
router.post("/burgers/create", function(req, res) {

  // takes the request for burger.addBurger
  burger.create(req.body.burger_name, function(result) {

    //callback will return a log to console,
    console.log(result);
    res.redirect("/");

  });
});

// put route - back to index
router.put("/burgers/:id", function(req, res) {
  burger.update(req.params.id, function(result) {

    // console.log db update callback
    console.log(result);

    // Send back response
    res.sendStatus(200);
  });
});

module.exports = router;
