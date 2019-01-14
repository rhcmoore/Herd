var db = require("../models");
var moment = require('moment');

module.exports = function(app) {

    //home page
    app.get("/", function(req,res){

        db.Community.findAll({
            include: [{
                model: db.Event
            }]
        }).then(function(data) {
            var hbsObject = {
                communities: data
            };
            console.log(req.user);

            res.render("index", hbsObject);
        });
    }); 

    app.get("/dashboard", function(req, res){
        if(req.user){
            console.log(req.user);
            res.render("dashboard");
        }
        else{
            res.redirect("/login");
        }
    });

    //login page

    app.get("/login", function(req, res){
        res.render("login");
    });

    //create new user page

    app.get("/signup", function(req, res){
        res.render("signup");
    })

    //community page
    app.get("/community/:community", function(req,res){
        var communityId = req.query.communityId;
        console.log(communityId);
        db.Event.findAll({
            where: {communityId: communityId}
        }).then(function(data) {
            var hbsObject = {
                Events: data,
                Community: req.params.community,
                communityId: communityId
            };
            res.render("community", hbsObject);
        });
    }); 
    //event page
    app.get("/community/:community/event/:event", function(req,res){
        var eventId = req.query.eventId;
        db.Event.findAll({
            where: {id: eventId},
            include: [{
                model: db.Attendee
            }]
        }).then(function(data) {
            var hbsObject = {
                Event: data
            };
            res.render("event", hbsObject);
        });
    }); 

    //create new community page
    app.get("/api/community/:community/new", function (req,res){
        res.render("newcommunity");
    });

    //create new event page
    app.get("/api/community/:community/event/new", function (req,res){

        db.Community.findOne({
            where:{
                name: req.params.community
            }
        }).then(function(result){
            var hbsObject = {
                community:result
            }
            res.render("newevent", hbsObject);
        })
    });

    //create new community
    app.post("/api/community/new", function(req, res) {
        db.Community.create({
            name: req.body.name,
            description: req.body.description
        }).then(function(result){
            res.json(result);
        })
    });

    //create new event
    app.post("/api/community/:community/event/new", function(req, res) {
       console.log("community id: " + req.body.communityId);
        db.Event.create({
            name: req.body.name,
            date: req.body.date,
            description: req.body.description,
            location: req.body.location,
            max_attendees: req.body.max_attendees,
            CommunityId: req.body.communityId
        }).then(function(result){
            res.json(result);
        })
    });

    //create new user
    app.post("/api/signup", function(req, res){
        db.User.create({
            username: req.body.username,
            password: req.body.password,
            name: req.body.name
        }).then(function(result){
            res.json(result);
        })

    });

    //new event attendee
    app.post("/api/attendee", function(req, res){
        console.log(req.body.eventId)
        db.Attendee.create({
            name: req.body.name,
            description: req.body.description,
            location: req.body.location,
            EventId: req.body.eventId
        }).then(function(result){
            res.json(result);
        })
    });

    //update community
    app.put("/api/community/:community/:id", function(req, res) {
        var communityId = req.params.id;
        db.Community.update({
            name: req.body.name,
            description: req.body.description
        }),{
            where: communityId
        }.then(function(result){
            res.json({result})
        })

    });

    //update event
    app.put("/api/community/:community/event/:event/:id", function(req, res) {
        var eventId = req.params.req.params.id;
        db.Event.update({
            name: req.body.name,
            date: req.body.date,
            description: req.body.body,
            location: req.body.location,
            max_attendees: req.body.max_attendees,
            communityId: communityId
        }),{
            where: eventId
        }.then(function(result){
            res.json({result})
        })

    });

    //delete community
    app.delete("/api/community/:community/:id", function(req, res) {
        db.Community.destroy({
            where: {
              id: req.params.id
            }
          }).then(function(result) {
            res.json(result);
          });
    });

    //delete event
    app.delete("/api/community/:community/event/:event/:id", function(req, res) {
        db.Event.destroy({
            where: {
              id: req.params.id
            }
        }).then(function(result) {
        res.json(result);
        });
    });

    // API communities route
    app.get("/api/communities", function(req,res) {
        // ex: /api/communities?APIkey=54321&name=UCB&description=Bootcamp
        
        // Grab query terms
        var APIkey = req.query.APIkey;
        var communityName = req.query.name;
        var communityDesc = req.query.description;
        if (!communityName) communityName = "";
        if (!communityDesc) communityDesc = "";

        // if no API key, exit
        if (!APIkey) {
            // send to page "Please enter an API key"
            res.redirect("/");
        } else {
            db.Community.findAll({
                where:{
                    name: { $like: `%${communityName}%` },
                    description: { $like: `%${communityDesc}%` }
                }
            }).then(function(data) {
                res.json(data);
            });
        }
    });

    // API events route
    app.get("/api/events", function(req,res) {
        // ex: /api/events?APIkey=54321&name=UCB&description=Bootcamp&date=2019-08-04
        
        // Grab query terms
        var APIkey = req.query.APIkey;
        var eventName = req.query.name;
        var eventDesc = req.query.description;
        var eventDate = req.query.date;
        var nextDay;
        if (!eventName) eventName = "";
        if (!eventDesc) eventDesc = "";
        if (eventDate) {
            eventDate = moment(eventDate).format("YYYY-MM-DD");
            nextDay = moment(eventDate).add(1,'days').format("YYYY-MM-DD");
        }
        
        // if no API key, exit
        if (!APIkey) {
            // "Please enter an API key"
            res.redirect("/");
        } else if (!eventDate) {
            // Search all
            db.Event.findAll({
                where:{
                    name: { $like: `%${eventName}%` },
                    description: { $like: `%${eventDesc}%` }
                }
            }).then(function(data) {
                res.json(data);
            });
        } else {
            db.Event.findAll({
                where:{
                    name: { $like: `%${eventName}%` },
                    description: { $like: `%${eventDesc}%` },
                    date: {
                        $gt: eventDate,
                        $lt: nextDay
                    }
                }
            }).then(function(data) {
                res.json(data);
            });
        }
    });
};