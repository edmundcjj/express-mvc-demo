module.exports = (allModels) => {
  return {

    // get register form
    newform: (request, response) => {
      response.render('usernew');
    },

    // create new user
    new: (request, response) => {
      let queryDone = (queryResult) => {

        response.send("we changed " + queryResult.rowCount + " rows");
      };

      allModels.user.new(request.body, queryDone);

    },
    get: (request, response) => {
      let queryDone = (queryResult) => {

        response.send("user email " + queryResult.rows[0].email );
      };

      allModels.user.get(request.params.id, queryDone);

    }
  }
}






