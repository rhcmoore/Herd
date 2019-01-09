var express = require("express");
var exphbs = require("express-handlebars");
var bodyParser = require('body-parser');
var PORT = process.env.PORT || 8080;

var app = express();

// Static directory
app.use(express.static(__dirname + '/public'));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//sets up app to use body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes
// =============================================================
require("./controllers/herd_controllers.js")(app);

// Requiring our models for syncing
var db = require("./models");

// Syncing our sequelize models and then starting our Express app
// =============================================================

db.sequelize.sync({ force: false }).then(function() {
    app.listen(PORT, function() {
      console.log(`App listening on PORT ${PORT} -- http://localhost:${PORT}/`);
    });
});