var db = require("../models");
var passport = require('passport');

var LocalStrategy = require('passport-local').Strategy;

module.exports = function(app) {

    passport.use(new LocalStrategy(
        function(username, password, done) {
          db.User.findOne({ username: username }, function (err, user) {
            if (err) { return done(err); }
            if (!user) {
              return done(null, false, { message: 'Incorrect username.' });
            }
            if (!user.validPassword(password)) {
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
      
    app.post('/login', passport.authenticate('local',{ successRedirect: '/',failureRedirect: '/login', failureFlash: true }),
        function(req, res) {
    });

    app.get('/logout', function(req, res){
        req.logout();
        res.redirect('/');
    })


};