var express = require("express");
var app = express();
var jsonParser = require("body-parser").json;



var jsonCheck = function(req, res, next){
  if(req.body){
    console.log("The sky is", req.body.color);
  } else {
    console.log("No body property on the request");
  }
  next();
}

app.use(jsonCheck);
app.use(jsonParser());
app.use(jsonCheck);

//app.use(function(req,res,next){
//  console.log("First piece of middleware");
//  next();
//});
//
//app.use(function(req,res,next){
//  console.log("Second piece of middleware");
//  next();
//});

var port = process.env.PORT || 3000;

app.listen(port, function(){
	console.log("Express server is listening on port", port);
});