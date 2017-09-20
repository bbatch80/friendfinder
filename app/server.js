var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var app = express();
var PORT = 3005;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));






require('./routing/apiRoutes.js')(app); 
require('./routing/htmlRoutes.js')(app);

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
