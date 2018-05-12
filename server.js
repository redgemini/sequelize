// test server.js load
console.log("load server.js");
require('dotenv').config();

//require npm packages
var express = require("express");
var bodyParser = require("body-parser");

require('dotenv').config();

//set up port
var PORT = process.env.PORT || 3306;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// parse application/x-www-form-urlencoded

//???????TA QUESTION HOW TO DECIDE TRUE OR FALSE ???????//

app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Set Handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgersController.js");

app.use("/",routes);

app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});
