//LOAD DATA
// We are linking our routes to a series of data sources
//These data sources hold arrays of info

var data = require('../data/friends.js');

// ROUTING

module.exports = function(app) {

	// below returns a json of the friend data
	app.get('/api/friends', function(req, res) {
		res.json(data);
	});

	app.post('/api/friends', function(req, res) {
		
		var friendMatch = {
			name:"",
			photo:"",
			friendDiff: 50
		};

	var friendData = req.body;
	var friendName = friend.name;
	var friendPic = friend.link;
	var friendScore = friend.scores;
		console.log(friend);
		data.push(friend);
		res.json(friend);
	//calculates the difference between the users's scores and the scores of each user in the database

	var totalDifference = 0;

//loops through the friend possibilities in the database
	for  (var i=0; i<friendsArray.length; i++){
			console.log(friendsArray[i].name);
			totalDifference = 0;

		//loops through all of the scores for each friend
		for (var j=0; j< friendsArray[i].scores[j]; j++){
			//calculate the total difference between the scores and sums into the totalDifference

			totalDifference += Math.abs(
				parseInt(friendScore[j])-
				parseInt(friendsArray[i].scores[j]));

				//if sum of diff is less then the differences of the current 'best match'
				if(totalDifference <=friendMatch.friendsDiff){

					//resets the best match to the new friend

					friendMatch.name = friendsArray[i].name;
					friendMatch.photo = friendsArray[i].link;
					friendMatch.friendDiff = totalDifference;
				}
		}
	}
	//saves the user's data to the database 
	friendsArray.push(friendData);

	//return a JSON with user's best match to be used by html
	res.json(friendMatch);

});
};








