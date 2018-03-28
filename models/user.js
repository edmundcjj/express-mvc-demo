module.exports = (dbPool) => {
	return {

		new : (requestBody) => {
			console.log("inside user");

	  		let values = [
	  			requestBody.email,
	  			requestBody.name
	      	];

	      	console.log( "db pool", dbPool );

		    dbPool.query('INSERT INTO users (email, password) VALUES ($1, $2)', values, (error, queryResult) => {

		    	if( error ){
		    		console.log( "db error", error.message );
		    	}
		    	console.log("insert row count", queryResult.rowCount)
		    });

			console.log("inside user model");

		}

	}


}