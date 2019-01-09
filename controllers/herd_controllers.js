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
    //community page
    app.get("/:community", function(req,res){
        var communityId = req.query.community_id;
        db.Event.findAll({
            include: [{
                where: {communityId: communityId}
            }]
        }).then(function(data) {
            var hbsObject = {
                Events: data
            };
            res.render("index", hbsObject);
        });
    }); 
    //event page
    app.get("/:community/:event", function(req,res){
        var eventId = req.query.eventId;
        db.Event.findAll().then(function(data) {
            var hbsObject = {
                Events: data
            };
            res.render("index", hbsObject);
        });
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
    app.post("/api/:community/event/new", function(req, res) {
        var communityId = req.query.communityId;
        db.Event.create({
            name: req.body.name,
            date: req.body.date,
            description: req.body.body,
            max_attendees: req.body.max_attendees,
            communityId: communityId
        }).then(function(result){
            res.json(result);
        })
    });

    //update community
    app.put("/api/:community/:id", function(req, res) {
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

    //upodate event
    app.put("/api/:community/:event/:id", function(req, res) {
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
    app.delete("/api/:community/:id", function(req, res) {
        db.Community.destroy({
            where: {
              id: req.params.id
            }
          }).then(function(dbPost) {
            res.json(dbPost);
          });
    });

    //delete event
    app.delete("/api/:community/:event/:id", function(req, res) {
        db.Event.destroy({
            where: {
              id: req.params.id
            }
        }).then(function(dbPost) {
        res.json(dbPost);
        });
    });
};