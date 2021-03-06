var express = require("express");
var exphbs = require("express-handlebars");
var router = require("./controllers/burgers_controller.js");
var bodyParser = require("body-parser");
var methodOverride = require('method-override');



var PORT = process.env.PORT || 8000;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));


// override with the x-httpmethod overrride header in request
app.use(methodOverride('_method'))

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(router);


// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
