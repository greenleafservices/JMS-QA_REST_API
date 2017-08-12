'use strict';

var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/sandbox");

var db = mongoose.connection;

db.on("error", function(err){
	console.error("connection error:", err);
});
//  listen for the open event - once - stops app from listening once the open event has fired
db.once("open", function(){
	console.log("db connection successful");
	// All database communication goes here
});
	//var Schema = mongoose.Schema;
	var AnimalSchema = new mongoose.Schema({
		type:  {type: String, default: "goldfish"},
		size:  String, default: "small",
		color: {type: String, default: "golden"},
		mass:  {type: Number, default: 0.007},
		name:  {type: String, default: "Angela"}
//        type: String,
//        size: String,
//        color: String,
//        mass: Number,
//        name: String
	});


//	AnimalSchema.pre("save", function(next){
//		if(this.mass >= 100) {
//			this.size = "big";
//		} else if (this.mass >= 5 && this.mass < 100) {
//			this.size = "medium";
//		} else {
//			this.size = "small";
//		}
//		next();
//	});
//
//	AnimalSchema.statics.findSize = function(size, callback){
//		//this == Animal
//		return this.find({size: size}, callback);
//	}
//
//	AnimalSchema.methods.findSameColor = function(callback) {
//		//this == document
//		return this.model("Animal").find({color: this.color}, callback);
//	}
    // Create a collection called Animals
var Animal = mongoose.model("Animal", AnimalSchema);
    // use the Anmila constructor to create an anmial object
	
  var elephant = new Animal({
		type: "elephant",
		size: "big",
        color: "gray",
		mass: 6000,
		name: "Lawrence"
	});
    /* We need to save the object - the first save
      will first create the anmials collect and then save the object
      elephant.save();
      db.close();
      This code won't work. That's because save is an asynchronous method. The application will call the save method first and then call close right away before safe can finish, causing it to fail. 
      
      What we'll need to do is pass in a callback function into the save method, and then close the database connection from inside the callback. */
      elephant.save(function(err){
        if (err) console.error("Save Failed.", err);
        else console.log("Record saved!");
        db.close(function(){
          console.log("db connection closed")  ;
        });
      });
      /*The save callback passes in an error as its parameter. We handle that by console logging save failed. If it does save, let's logout saved. When the save is done the callback is fired and then the database will close. We  pass in a call back to the close method to be notified when the connection is closed. */
    
      
	var animal = new Animal({}); //Goldfish
//
//	var whale = new Animal({
//		type: "whale",
//		mass: 190500,
//		name: "Fig"
//	});
//
//	var animalData = [
//		{
//			type: "mouse",
//			color: "gray",
//			mass: 0.035,
//			name: "Marvin"
//		},
//		{
//			type: "nutria",
//			color: "brown",
//			mass: 6.35,
//			name: "Gretchen"
//		},
//		{
//			type: "wolf",
//			color: "gray",
//			mass: 45,
//			name: "Iris"
//		},
//		elephant,
//		animal,
//		whale
//	];
//
//	Animal.remove({}, function(err) {
//		if (err) console.error(err);
//		Animal.create(animalData, function(err, animals){
//			if (err) console.error(err);
//			Animal.findOne({type: "elephant"}, function(err, elephant) {
//				elephant.findSameColor(function(err, animals){
//					if (err) console.error(err);
//					animals.forEach(function(animal){
//						console.log(animal.name + " the " + animal.color + 
//							" " + animal.type + " is a " + animal.size + "-sized animal.");
//					});
//					db.close(function(){
//						console.log("db connection closed");
//					});
//				});
//			});
//		});
//	});
//});
//














