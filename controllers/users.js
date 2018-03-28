const db = require('../db');

module.exports = {

	// get register form
	newform: (request, response) => {
		response.render('usernew');
	},

	// create new user 
	new: (request, response) => {
			console.log("inside controller", db.user)
			db.user.new(request.body);

			response.send("monkey");
	}
}






