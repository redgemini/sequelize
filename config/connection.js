//my sql connection
console.log ("load connection.js test");

var mysql = require("mysql");

var connection;

if(process.env.JAWSDB_URL) {
  console.log('jawsdb detected');
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "",
  database: "burger_db"
});
 // connection = mysql.createConnection('mysql://eyk5lnfzl0guac8w:mpnmrq5b7nbs19q6@ocvwlym0zv3tcn68.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/yxt1jgn9352nktgc');
};
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
