module.exports = (dbPool) => {
	return {

		new : (requestBody, callback) => {

	  		let values = [
	  			requestBody.email,
	  			requestBody.name
	      	];

            let queryString = 'INSERT INTO users (email, password) VALUES ($1, $2)';

		    dbPool.query(queryString, values, (error, queryResult) => {

		    	if( error ){
		    		console.log( "db error", error.message );
		    	}
                callback( queryResult );
		    });

		}

	}


}