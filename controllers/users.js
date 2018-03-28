const db = require('../db');

module.exports = {

	// get register form
	newform: (request, response) => {
		response.render('usernew');
	},

	// create new user
	new: (request, response) => {
		db.user.new(request.body, (queryResult) => {

            response.send("monkey");
        });

	}
    get: (request, response) => {
        /*
        implement something like this
        db.user.get(request.params.id, (queryResult) => {

            response.render("pokemon", queryResult.pokemon);
        });
        */

    }
}






