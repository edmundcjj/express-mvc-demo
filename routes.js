module.exports = (app,db) => {

  const users = require('./controllers/users')(db);

  /*
   *  =========================================
   *  USERS
   *  =========================================
   */

  // user register form
  app.get('/users/new', users.newform);

  //create user
  app.post('/users/new', users.new);

  //get a single user
  app.get('/users/:id', users.get);
}
