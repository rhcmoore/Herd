var db = require("../models");
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

module.exports = function(app) {

    passport.use(new LocalStrategy(
        function( username, password, done) {
            db.User.findOne({ where:{ username: username}}).then(function(user){  
                if (!user) {
                    console.log("Incorrect username")
                    return done(null, false, { message: 'Incorrect username.' });
                }
                if (!user.validPassword(password)) {
                    console.log("Incorrect password")
                    return done(null, false, { message: 'Incorrect password.' });
                }
                console.log("success")
                return done(null, user);
            });
        }
      ));
      passport.serializeUser(function(user, done) {
        console.log("serializeUser");
        done(null, user);
      });
    
      passport.deserializeUser(function(user, done) {
        console.log("deserializeUser");
          done(null, user);
      });
    
    // passport.serializeUser(function(user, done) {
    //     console.log("serializeUser");
    //     done(null, user.id);
    // });
    
    // passport.deserializeUser(function(user, done) {
    //     console.log("deserializeUser");
    //     done(err, user);
    // });
      
    app.post('/login',  passport.authenticate('local'),
        function(req, res) {
            req.logIn(res.user, function (err) {
             res.json('/');
            })
        }
    );


    app.get('/signout', function(req, res){
        console.log("logging out")
        req.logout();
        res.redirect('/');
    })

};