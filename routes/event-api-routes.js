// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the events
  app.get("/events", function(req, res) {
   
    db.Event.findAll({

    }).then(function(dbEvent) {

    });
  });

}