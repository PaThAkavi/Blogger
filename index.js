var express = require("express");
var index = express();

index.set("view engine", "ejs");

index.get("/", function(req, res){
	res.send("Home Page");	
});

index.listen(8888, function(){
	console.log("The server has started!");
});
