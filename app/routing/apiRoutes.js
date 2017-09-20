var friendData = require("../data/friends.js");

var path = require("path");

module.exports = function(app){

app.get("/api/friends", function(req, res){
	//Internal Server Error says friends is not defined???
	//friendsData should be posted to the API/friends page
		res.json(friends);
});


app.post("/api/friends", function(req, res){
		var newFriend = req.body;
		//Some javascript would go here to breakdown the JSON object then compare responses with others too check compatibility
});
}