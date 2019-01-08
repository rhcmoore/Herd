var db = require("../models");

module.exports = function(app) {

    //home page
    app.get("/", function(req,res){
        db.Community.findAll({}).then(function(data) {
            var hbsObject = {
                communities: data
            };
            res.render("index", hbsObject);
        });
    }); 
    //community page
    app.get("/:community", function(req,res){
          
    }); 
    //event page
    app.get("/:community/:event", function(req,res){
          
    }); 
    //create new community
    app.post("/api/community/new", function(req, res) {
     
    });
    //create new event
    app.post("/api/:community/event/new", function(req, res) {
     
    });
    //update community
    app.put("/api/:community/:id", function(req, res) {
     
    });
    //upodate event
    app.put("/api/:community/:event/:id", function(req, res) {
     
    });
    //delete community
    app.delete("/api/:community/:id", function(req, res) {
     
    });
    //delete event
    app.delete("/api/:community/:event/:id", function(req, res) {
     
    });
};