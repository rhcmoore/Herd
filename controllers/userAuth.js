var db = require("../models");
var passport = require('passport');

var LocalStrategy = require('passport-local').Strategy;

module.exports = function(app) {

    passport.use(new LocalStrategy(
        function(username, password, done) {
            console.log(username)
            db.User.findOne({ where:{ username: username}}).then(function(user){  
                    console.log("hello")
                if (!user) {
                    console.log("Incorrect username")

                    return done(null, false, { message: 'Incorrect username.' });
                }
                if (!user.validPassword(password)) {
                    console.log("Incorrect password")

                    return done(null, false, { message: 'Incorrect password.' });
                }
                return done(null, user);
            });
        }
      ));
   
    passport.serializeUser(function(user, done) {
    done(null, user.id);
    });
    
    passport.deserializeUser(function(id, done) {
        db.User.findById(id, function(err, user) {
        done(err, user);
    });
    });
      
    app.post('/login', passport.authenticate('local'),
        function(req, res) {
            console.log("hello")
            res.redirect("/")
    });
    // ,{ successRedirect: '/',failureRedirect: '/login', failureFlash: true }
    app.get('/logout', function(req, res){
        req.logout();
        res.redirect('/');
    })


};