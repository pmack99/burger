// Set up MySQL connection.
var mysql = require("mysql");

if(process.env.NODE_ENV === "production"){
  var connectionoptions = process.env.JAWSDB_URL

}else{
  var connectionoptions = {
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "burgers_db"
  }
  
}

var connection = mysql.createConnection(connectionoptions);






// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
