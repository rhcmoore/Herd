var db = require("../models");
var passport = require('passport');

var LocalStrategy = require('passport-local').Strategy;

module.exports = function(app) {

    passport.use(new LocalStrategy(
        {
 
            // by default, local strategy uses username and password, we will override with email
     
            usernameField: 'username',
     
            passwordField: 'password',
     
            passReqToCallback: true // allows us to pass back the entire request to the callback
     
        },
        function(req, username, password, done) {
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
    done(null, user.id);
    });
    
    passport.deserializeUser(function(user, done) {
        // db.User.findById(id, function(err, user) {
        done(null, user);
        // });
    });
      
    app.post('/login',  passport.authenticate('local', { successRedirect: '/',failureRedirect: '/login', failureFlash: false }),
        function(req, res) {
            console.log("hello")
    });

  
        


    app.get('/logout', function(req, res){
        req.logout();
        res.redirect('/');
    })


};