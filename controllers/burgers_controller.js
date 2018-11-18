var express = require("express");

var router = express.Router();

// Import the model to use its database functions.
var burger = require("../models/burger.js");

router.get("/", function (req, res) {
    burger.all(function (data) {
        var hbsObject = {
            burger: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/cats", function (req, res) {
    burger.create([
        "burger_name"
    ], [
            req.body.name,
        ], function (result) {
            // Send back the ID of the new quote
            res.json({ id: result.insertId });
        });
});



cat.update({
    devoured: req.body.devoured
}, condition, function (result) {
    if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
    } else {
        res.status(200).end();
    }
});


// Export routes for server.js to use.
module.exports = router;