var authController = require("../controllers/authcontroller.js");

module.exports = function (app, passport) {
    app.get("/signup", authController.signup);
    app.get("/signin", authController.signin);
    //  where redirect when signup success???? Also change below if different
    app.post("/signup", passport.authenticate("local-signup", {
        successRedirect: "/events",
        failureRedirect: "/signup"
        }
    ));

    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated())
            return next();

        res.redirect('/signin');
    }

    app.get("/events", isLoggedIn(), authController.guest());
    app.get("/logout", authController.logout());

    app.post("/signin", passport.authenticate("local-signin", {
        successRedirect: "/events",
        failureRedirect: "/signin"
        }
    ));
};

