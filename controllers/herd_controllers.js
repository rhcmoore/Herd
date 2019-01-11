var db = require("../models");

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
            res.render("index", hbsObject);
        });
    }); 

    //login page

    app.get("/login", function(req, res){
        res.render("login");
    });


    //create new user page

    app.get("/api/createuser", function(req, res){
        res.render("createuser");
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
            where: {id: eventId}
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
            max_attendees: req.body.max_attendees,
            CommunityId: req.body.communityId
        }).then(function(result){
            res.json(result);
        })
    });

    //create new user
    app.post("/api/createuser", function(req, res){
        db.User.create({
            username: req.body.username,
            password: req.body.password,
            name: req.body.name
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
    app.put("/api/community/:community/:event/:id", function(req, res) {
        var eventId = req.params.req.params.id;
        db.Event.update({
            name: req.body.name,
            date: req.body.date,
            description: req.body.body,
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


};