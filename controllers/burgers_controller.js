var express = require("express");
var router = express.Router();

// Import the model to use its database functions.
var burger = require("../models/burger.js");

router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var hbsObject = {
            burger: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});


// router.post("/", function (req, res) {
//     burger.createBurger([
//         "burger_name", "devoured"
//     ], [
//             req.body.burger_name, req.body.devoured
//         ], function (result) {
//             // Send back the ID of the new burger
//             res.json({ id: result.insertId });
           
//         });
// });

router.post("/", function(req, res) {
    burger.createBurger([
      "burger_name"
    ], [
      req.body.burger_name
    ], function() {
      res.redirect("/");
    });
  });



router.put("/:id", function(req, res) {
    var condition = 'id = ' + req.params.id;
  
    burger.devourBurger({
      devoured: true
    }, condition, function(data) {
      res.redirect('/');
    });
  });

  
  // Export routes for server.js to use.
  module.exports = router;

