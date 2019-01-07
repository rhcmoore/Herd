var express = require("express");
var exphbs = require("express-handlebars");

var PORT = process.env.PORT || 8080;

var app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

require("./controllers/herd_controller.js")(app);


// Requiring our models for syncing
var db = require("./models");

db.sequelize.sync({ force: false }).then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
});