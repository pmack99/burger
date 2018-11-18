// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");


// The variables cols and vals are arrays.
var burger = {
//select All function
  selectAll: function(cols, vals, cb) {
    orm.selectAll("burgers", cols, vals, function(res) {
      cb(res);
    });
  },

//create function
  createBurger: function(objColVals, condition, cb) {
    orm.createBurger("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  },

//devour function
  devourBurger: function(objColVals, condition, cb) {
    orm.devourBurger("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  },
};


module.exports = burger;


