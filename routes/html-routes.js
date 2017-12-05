// Dependencies
// =============================================================
var path = require("path");
var passport = require("passport");
var info = require("../config/passport/passport.js");
var userInfo = info.userInfo;
// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.
  app.get("/", function(req, res) {
    res.render('index');
  });

  app.get("/host", function(req, res) {
    res.render("host");
  });

  app.get("/guest", function(req, res) {
    res.render("guest");
  });

  app.get("/contact", function(req, res) {
    res.render("contact");
  });
};
