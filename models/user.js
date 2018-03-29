module.exports = function(dbPool){
	return {

		get : (id, whenDoneWithQueryFunction) => {
	  		let values = [
	  			id
	      	];

			let queryString = 'SELECT * FROM users WHERE id=$1';

		    dbPool.query(queryString, values, (error, queryResult) => {

		    	if( error ){
		    		console.log( "db error", error.message );
		    	}
                whenDoneWithQueryFunction( queryResult );
		    });

		},

		new : (requestBody, whenDoneWithQueryFunction) => {

	  		let values = [
	  			requestBody.email,
	  			requestBody.password
	      	];

            let queryString = 'INSERT INTO users (email, password) VALUES ($1, $2)';

		    dbPool.query(queryString, values, (error, queryResult) => {

		    	if( error ){
		    		console.log( "db error", error.message );
		    	}
                whenDoneWithQueryFunction( queryResult );
		    });

		}

	}
}
