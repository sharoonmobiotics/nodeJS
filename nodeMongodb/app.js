var express = require("express");
var bodyParser = require("body-parser");
var router = require("./routes.js");
var app = express();
var formidableMiddleware = require('express-formidable');
 
app.set('view engine', 'ejs');
app.use(formidableMiddleware());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use("/", router);


var server = app.listen(3000, function () {
    console.log("app running on port.", server.address().port);
});


