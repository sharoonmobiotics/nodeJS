var express = require("express");
var bodyParser = require("body-parser");
var router = require("./routes.js");
var app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", router);


var server = app.listen(3000, function () {
    console.log("app running on port.", server.address().port);
});


