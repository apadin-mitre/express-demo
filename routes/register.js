var express = require('express');
var router = express.Router();

/* POST register - creates a new user, returns success status in JSON 
response (meaning you do not need to actually store the user info in a database. 
You do need to validate that the user supplied username and email) */
router.post('/', function(req, res, next) {
	const username = req.body.username;
	const email = req.body.email;

	if(!username || !email) {
		let response = {
			status: 400,
			msg: "Invalid Request."
		}
		res.send(response);
	} else {
		let response = {
			status: 200,
			msg: "Success: " + username
		}
		res.send(response);
	}	
});

module.exports = router;
